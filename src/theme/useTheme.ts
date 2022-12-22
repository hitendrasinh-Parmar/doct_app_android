import { useContext } from 'react';
import { themeType } from '../types/global';
import { ThemeContext } from './ThemeProvider';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
