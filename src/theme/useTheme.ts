import { useContext } from 'react';
import { themeKeys } from '../types/global';
import { ThemeContext } from './ThemeProvider';

const useTheme = () => {
  return useContext(ThemeContext) as themeKeys;
};

export default useTheme;
