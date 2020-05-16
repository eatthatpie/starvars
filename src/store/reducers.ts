import { defaultCategories } from '@/data';

export const categories = (state = defaultCategories, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const settings = (state = { theme: 'light' }, action) => {
  switch (action.type) {
    case 'set_theme':
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
}
