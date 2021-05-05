import { Request, Response } from 'express';
import { Repository } from '../repositories/Interfaces/Repository';
import { User } from '../types/types';
import { APIController } from './Interface/APIController';
import L from '../utils/Logger';

export default class ExpressAPIController implements APIController {
  private readonly EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private repository: Repository) {
    L.info('ExpressAPIController initialized');
  }
  
  async user(req: Request, res: Response): Promise<void> {
    const page = req.query.page || '0';
    L.info(`ExpressAPIController:user Fetching users from page ${page}`);
    const usersPromise = this.repository.getAll(+page);
    const countPromise = this.repository.getCount()
    const [ users, count ] = await Promise.all([usersPromise, countPromise]);
    res.status(200).json({ success: true, users, count });
  }
  
  async create(req: Request, res: Response): Promise<void> {
    const payload: User = req.body;
    
    if (!payload || !payload.email || !payload.password || !payload.firstName || !payload.lastName || !payload.description) {
      L.error(`ExpressAPIController:create missing email or password`);
      res.status(400).json({
        success: false,
        error: 'Required fields are missing Email/Password/First Name/Last Name/Description'
      });
      return;
    }
     
    
    let user = await this.repository.findByEmail(payload);
    if (user) {
      L.error(`ExpressAPIController:create user ${payload.email} exists`);
      res.status(400).json({
        success: false,
        error: `Email ${user.email} is already taken`
      });
      return;
    }
    
    const validateEmail = this.EMAIL_REGEX.test(payload.email);

    if (!validateEmail) {
      L.error(`ExpressAPIController:create bad email ${payload.email}`);
      res.status(400).json({
        success: false,
        error: `Bad email`
      });
      return;
    }

    user = await this.repository.create(payload);
    L.info(`ExpressAPIController:create created user ${user.email}`);
    
    res.status(200).json({ success: true, user: user.email });
  }
}
