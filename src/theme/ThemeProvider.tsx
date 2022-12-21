import React from 'react';
import { Colors } from './colors';
import Styles from '../styles/Styles';
import { themeKeys, ThemeProviderType } from '../types/global';

export const ThemeContext = React.createContext<themeKeys | null>(null);

const ThemeProvider = ({ children }: ThemeProviderType) => {
  const theme: themeKeys = {
    ...Styles,
    ...Colors,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
