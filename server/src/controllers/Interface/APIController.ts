import { Request, Response } from 'express';

export interface APIController {
  user(req: Request, res: Response): Promise<void>
  create(req: Request, res: Response): Promise<void>
}
