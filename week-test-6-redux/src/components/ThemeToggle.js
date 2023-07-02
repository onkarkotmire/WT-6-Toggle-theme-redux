import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme(newTheme));
  };

  return (
    <div  style={{
        marginTop:"20px",
      }}>
      <button onClick={handleThemeChange}>
        Toggle Theme to : {theme === 'light' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default ThemeToggle;
