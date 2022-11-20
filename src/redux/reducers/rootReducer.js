import { combineReducers } from '@reduxjs/toolkit';
import storeReducer from './storeReducer.js';
import userReducer from './userReducer.js';

export default combineReducers({
  user: userReducer,
  store: storeReducer,
});
