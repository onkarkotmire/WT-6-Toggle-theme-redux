import { TOGGLE_THEME } from '../actions/themeActions';

const initialState = {
  theme: 'light',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
