import { CreateActions, CreateState } from '../actions/create/interfaces/interfaces';
import { SUCCESS_CREAT_USER, FAILED_CREAT_USER, RESET_STATE } from '../actions/create/interfaces/types';

const initialState: CreateState = {
  user: null,
  error: null,
};

const reducer = (state: CreateState = initialState, action: CreateActions): CreateState => {
  switch (action.type) {
    case SUCCESS_CREAT_USER: {
      return {
        ...initialState,
        user: action.user,
      };
    }

    case FAILED_CREAT_USER: {
      return {
        ...initialState,
        error: action.error,
      };
    }

    case RESET_STATE: {
      return initialState
    }

    default: {
      return state;
    }
  }
};

export default reducer;
