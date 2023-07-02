// Action Types
export const TOGGLE_THEME = 'TOGGLE_THEME';

// Action Creator
export const toggleTheme = (theme) => {
  return {
    type: TOGGLE_THEME,
    payload: theme,
  };
};
