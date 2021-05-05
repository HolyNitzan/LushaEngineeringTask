import { NetworkState, NetworkActions } from '../actions/network/interfaces/interfaces';
import { SET_FETCHING } from '../actions/network/interfaces/types';

const initialState: NetworkState = {
  isFetching: false
};

const reducer = (state: NetworkState = initialState, action: NetworkActions): NetworkState => {
  switch (action.type) {
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
