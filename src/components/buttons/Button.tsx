import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import useStyles from '../../styles/useStyles';

interface ButtonInterface {
  text: string;
  onPress?: () => void;
  buttonStyles?: Array<ViewStyle>;
  btnGroup?: boolean;
  lastbtn?: boolean;
  borderNone?: boolean;
  textStyle?: Array<TextStyle>;
}

const Button = (props: ButtonInterface) => {
  const {
    text,
    onPress,
    buttonStyles,
    btnGroup = false,
    lastbtn = false,
    borderNone = false,
    textStyle = [],
  } = props;
  const __s = useStyles();

  return (
    <View
      style={[
        __s.paddingV10,
        !borderNone && [__s.borderWidth1, __s.borderGray2],
        !!buttonStyles && buttonStyles,
        btnGroup && [__s.flex1, !lastbtn && __s.marginR10],
      ]}>
      <TouchableOpacity {...props} activeOpacity={0.8} style={[]} onPress={onPress}>
        <Text
          style={[__s.font16, __s.fontPoppinsRegular, __s.fontGray, __s.textCenter, ...textStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
