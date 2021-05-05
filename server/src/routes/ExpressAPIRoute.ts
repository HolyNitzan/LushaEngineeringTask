import { Express, Request, Response } from 'express';
import { APIController } from '../controllers/Interface/APIController';
import { Route } from './interfaces/Route'

export class ExpressAPIRoute implements Route {
    constructor(private app: Express, private controller: APIController) { }
    
    route(): void {
        this.app.post('/api/v1/users/create', (req: Request<any>, res: Response<any>) => {
            this.controller.create(req, res);
        });

        this.app.get('/api/v1/users', (req: Request<any>, res: Response<any>) => {
            this.controller.user(req, res);
        });
    }
}
