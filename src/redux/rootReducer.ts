import { combineReducers, createStore } from 'redux';
import userReducer from './slices/userReducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;