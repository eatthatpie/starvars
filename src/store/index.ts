import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categories, settings } from './reducers';
import { useLocalStorageMiddleware } from '@/store/middleware';

// createSettingsReducer
// createCategoriesReducer
// ...

export default function() {
  const rootReducer = combineReducers({ categories, settings });

  return createStore(rootReducer, applyMiddleware(useLocalStorageMiddleware(window)));
};
