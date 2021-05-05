import { Document } from 'mongoose';

export type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  description: string;
};

export interface UserModelInterface extends User, Document {}
