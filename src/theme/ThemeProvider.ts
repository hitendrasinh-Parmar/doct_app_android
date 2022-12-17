import React from 'react';
import { colors } from '../theme/colors';
import Styles from '../styles/Styles';


export const ThemeContext = React.createContext({});

const ThemeProvider = ({ children }: any) => {
  const isLightTheam = true;

  const theme = {
    Styles,
    colors
  }

  return (
    <ThemeContext.Provider value= { theme } >
    { children }
    < /ThemeContext.Provider>
    );
}

export default ThemeProvider;