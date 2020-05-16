import { combineReducers, createStore } from 'redux';
import { categories, settings } from './reducers';

export default function() {
  const rootReducer = combineReducers({ categories, settings });

  return createStore(rootReducer);
};
