export const useLocalStorageMiddleware = (w: Window) => store => next => action => {
  if (action.type === 'set_theme') {
    w.localStorage.setItem('theme', action.theme);
  }

  return next(action);
}
