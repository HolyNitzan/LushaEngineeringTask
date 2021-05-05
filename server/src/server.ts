import config from 'config';
import cors from 'cors';
import express, { RequestHandler, Request} from 'express';
import constants from '../config/constants';
import L from './utils/Logger';
import ExpressAPIController from './controllers/ExpressAPIController';
import { ExpressAPIRoute } from './routes/ExpressAPIRoute';
import mongoose from 'mongoose';
import { MongoDBRepository } from './repositories/MongoDBRepository';
import UserSchema from './repositories/Schema/UserSchema';

async function bootstrap(): Promise<express.Application> {
  const mongoUrl: string = config.get(constants.MONGO_URL);
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  L.info(`MongoDB initialized ${mongoUrl}`);

  const app = express();

  app.use(
    <RequestHandler>cors((req: Request, callback: Function) => {
      const origin: string = req.header('origin') || '';
      // Strip port using /:\d+/g, '', compare length
      const allowedOrigin = origin;
      callback(null, {
        origin: allowedOrigin,
        maxAge: 3600,
        optionsSuccessStatus: 200,
        credentials: true,
      });
    })
  );

  app.use(express.json());

  const apiController = new ExpressAPIController(new MongoDBRepository(UserSchema));

  new ExpressAPIRoute(app, apiController).route();

  app.use('/health', (_req, res) => {
    res.send('ok');
  });

  return app;
}

bootstrap().then((app) => {
  const port = config.get<number>(constants.PORT);

  app.listen(port, () => {
    L.info(`Server is listening on http://localhost:${port}`);
  });
});
