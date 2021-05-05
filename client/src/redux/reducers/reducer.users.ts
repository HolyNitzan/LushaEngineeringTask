import { SET_USERS, RESET_STATE } from '../actions/users/interfaces/types';
import { UserAction, UsersState } from '../actions/users/interfaces/interfaces';

const initialState: UsersState = {
  users: [],
  page: 0,
  count: 0,
};

const reducer = (state: UsersState = initialState, action: UserAction): UsersState => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
        count: action.count,
      };
    }

    case RESET_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
