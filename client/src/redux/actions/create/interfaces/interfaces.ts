import { FAILED_CREAT_USER, RESET_STATE, SUCCESS_CREAT_USER } from './types';

export interface CreateState {
  user: string | null;
  error: string | null;
}


export interface CreateUsersResponse {
  success: boolean;
  error?: string;
  user?: string;
}

export interface NewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  description: string;
}

export interface SuccessCreatUser {
  type: typeof SUCCESS_CREAT_USER,
  user: string;
}

export interface FailedCreatUser {
  type: typeof FAILED_CREAT_USER,
  error: string;
}

export interface ResetState {
  type: typeof RESET_STATE,
}


export type CreateActions = ResetState | SuccessCreatUser | FailedCreatUser ;
