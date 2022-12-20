import React from 'react';
import { Colors } from './Colors';
import Styles from '../styles/Styles';

export const ThemeContext = React.createContext({});

const ThemeProvider = ({ children }: any) => {
  const isLightTheam = true;

  const theme = {
    Styles,
    Colors,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
