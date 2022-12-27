import { useTheme } from "../theme/ThemeProvider"

export const getColor = (val: string) =>{
  const {theme} = useTheme();
  return theme[val];
}