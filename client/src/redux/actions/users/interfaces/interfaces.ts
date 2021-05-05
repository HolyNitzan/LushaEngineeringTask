import { SET_USERS, RESET_STATE } from './types';

export interface User {
  email: string;
  _id: string;
}

export interface FetchUsersResponse {
  success: boolean;
  error?: string;
  users?: User[];
  count?: number;
}

export type UsersState = {
  count: number;
  users: User[];
  page: number;
};

export interface SetUsers {
  type: typeof SET_USERS;
  users: User[];
  count: number;
}
export interface ResetState {
  type: typeof RESET_STATE;
}

export type UserAction = SetUsers | ResetState;
