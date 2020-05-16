export const settings = (state = { theme: 'dark' }, action) => {
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
