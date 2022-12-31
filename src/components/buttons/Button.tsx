import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import useStyles from '../../styles/useStyles';

type ButtonInterface = TouchableOpacityProps & {
  text: string;
  buttonStyles?: Array<ViewStyle>;
  btnGroup?: boolean;
  lastbtn?: boolean;
  borderNone?: boolean;
  textStyle?: Array<TextStyle>;
};

const Button = (props: ButtonInterface) => {
  const {
    text,
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
      <TouchableOpacity {...props}>
        <Text
          style={[__s.font16, __s.fontPoppinsMedium, __s.fontGray, __s.textCenter, ...textStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
