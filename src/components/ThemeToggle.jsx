import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import GlobalStyle from '../styles/globalStyles';

const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Modo {theme === 'light' ? 'Oscuro' : 'Claro'}</button>
      {children}
    </ThemeProvider>
  );
};

export default ThemeToggle;
