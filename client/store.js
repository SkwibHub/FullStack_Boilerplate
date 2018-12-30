import { createStore, applyMiddleware } from 'redux';
import mainReducer from './mainReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  mainReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
