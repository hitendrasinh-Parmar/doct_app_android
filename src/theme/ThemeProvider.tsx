import React, { useContext, useState } from 'react';
import { Colors } from './colors';
import Styles from '../styles/useStyles';
import { themeType, ThemeProviderType } from '../types/global';

const initialState = {
  theme: Colors[0],
  toggleTheme: () => {},
};

export const ThemeContext = React.createContext<themeType>(initialState);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<any>(Colors[0]);
  const toggleTheme = () => {
    if (theme == Colors[0]) {
      setTheme(Colors[1]);
    } else {
      setTheme(Colors[0]);
    }
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
