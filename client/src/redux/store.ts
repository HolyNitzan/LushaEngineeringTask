import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersReducer from './reducers/reducer.users';
import networkReducer from './reducers/reducer.network';
import createReducer from './reducers/reducer.create';

const store = createStore(
  combineReducers({
    users: usersReducer,
    network: networkReducer,
    create: createReducer,
  }),
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
