/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import useTheme from './useTheme';

const useThemedStyles = (styles: any) => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return styles(theme);
};

export default useThemedStyles;
