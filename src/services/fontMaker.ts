import { Platform } from 'react-native';

const font = {
  Poppins: {
    weights: {
      ExtraBold: '800',
      Bold: '700',
      Medium: '600',
      Light: '300',
      Regular: '400',
    },
    styles: {
      Italic: 'italic',
    },
  },
};

// generate styles for a font with given weight and style
export const fontMaker = (options = {}) => {
  // eslint-disable-next-line prefer-const
  let { weight, style, family } = Object.assign(
    {
      weight: '',
      style: '',
      family: 'Poppins',
    },
    options,
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { weights, styles } = font[family];

  if (Platform.OS === 'android') {
    weight = weights[weight] ? weight : '';
    style = styles[style] ? style : '';

    const suffix = weight + style;
    console.log(family + (suffix && suffix.length ? `-${suffix}` : ''));

    return {
      fontFamily: family + (suffix && suffix.length ? `-${suffix}` : ''),
    };
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    weight = weights[weight] || weights.Regular;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    style = styles[style] || 'normal';

    return {
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style,
    };
  }
};
