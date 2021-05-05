import { SET_FETCHING } from "./types";

export interface SetFetching {
  type: typeof SET_FETCHING;
  isFetching: boolean;
}

export type NetworkState = {
  isFetching: boolean
};

export type NetworkActions =  SetFetching;
