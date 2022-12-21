import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { Colors } from '../theme/colors';
import Styles from '../styles/Styles';
import { ReactNode } from 'react';

// type of theme for declared as globla

export type themeTypeBase = ViewStyle | ImageStyle | TextStyle;

export interface ThemeProviderType {
  children: ReactNode;
}

export type themeKeys = typeof Styles;
