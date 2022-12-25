import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  ViewStyle,
  TextInput,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Image,
  ImageStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useStyles from '../../styles/useStyles';
import { useTheme } from '../../theme/ThemeProvider';
import { ColorsInterface, themeType } from '../../types/global';

type ImageProps = React.ComponentProps<typeof Image> & {
  imgUrl: any;
  imgStyle?: Array<ImageStyle>;
  wrapperStyle?: Array<ViewStyle>;
};

const ImageCustom = (props: ImageProps) => {
  const { wrapperStyle = [], imgStyle = [], imgUrl = '' } = props;
  const __s = useStyles();

  return (
    <View style={[...wrapperStyle]}>
      <Image
        {...props}
        style={[__s.height24, __s.width24, __s.ImgContain, ...imgStyle]}
        source={imgUrl}
      />
    </View>
  );
};

export default ImageCustom;
