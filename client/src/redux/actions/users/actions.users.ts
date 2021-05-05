import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { isFetching } from '../network/actions.network';
import { RESET_STATE, SET_USERS } from './interfaces/types';
import { User, SetUsers, FetchUsersResponse, ResetState } from './interfaces/interfaces';

export const setUsers = (users: User[], count: number): SetUsers => {
  return {
    type: SET_USERS,
    users,
    count,
  };
};

export const resetState = (): ResetState => {
  return {
    type: RESET_STATE
  }
}

export const thunkFetchUsers = (page: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(isFetching(true));
    const res = await axios.get<FetchUsersResponse>(`http://localhost:4000/api/v1/users?page=${page}`);
    dispatch(setUsers(res.data.users || [], res.data.count || 0));
    dispatch(isFetching(false));
  };
};
