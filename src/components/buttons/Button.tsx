import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import useTheme from '../../theme/useTheme';
import { themeKeys } from '../../types/global';

interface ButtonInterface {
  text: string;
  onPress?: () => void;
  buttonStyles?: [];
}
const Button = (props: ButtonInterface) => {
  const style = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        style.flex1,
        style.paddingV10,
        style.borderWidth1,
        style.borderGray2,
        !!props?.buttonStyles && props.buttonStyles,
      ]}
      onPress={props.onPress}
    >
      <Text style={[style.font14, style.fontPoppinsRegular, style.fontGray, style.textCenter]}>
        Google
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
