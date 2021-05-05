import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { isFetching } from '../network/actions.network';
import { CreateUsersResponse, FailedCreatUser, ResetState, SuccessCreatUser } from './interfaces/interfaces';
import { NewUser } from './interfaces/interfaces';
import { FAILED_CREAT_USER, RESET_STATE, SUCCESS_CREAT_USER } from './interfaces/types';

export const thunkCreateUser = (user: NewUser): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(isFetching(true));
    try {
      const { data } = await axios.post<CreateUsersResponse>(`http://localhost:4000/api/v1/users/create`, user);
      if (data.success) {
        dispatch(setNewUser(data.user!));
        return;
      }
    } catch (e) {
      dispatch(setError(e.response.data.error!));
    }
    dispatch(isFetching(false));
  };
};

export const setNewUser = (email: string): SuccessCreatUser => {
  return {
    type: SUCCESS_CREAT_USER,
    user: email,
  };
};

export const setError = (error: string): FailedCreatUser => {
  return {
    type: FAILED_CREAT_USER,
    error,
  };
};

export const resetState = (): ResetState => {
  return {
    type: RESET_STATE
  }
}
