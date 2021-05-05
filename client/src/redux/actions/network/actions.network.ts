import { SET_FETCHING } from './interfaces/types';
import { SetFetching } from './interfaces/interfaces';

export const isFetching = (isFetching: boolean): SetFetching => {
  return { type: SET_FETCHING, isFetching };
};
