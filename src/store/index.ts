import { combineReducers, createStore } from 'redux';
import { settings } from './reducers';

export default function() {
  const rootReducer = combineReducers({ settings });

  return createStore(rootReducer);
};
