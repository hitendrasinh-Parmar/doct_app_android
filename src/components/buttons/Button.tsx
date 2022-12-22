import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import useStyles from '../../styles/useStyles';

interface ButtonInterface {
  text: string;
  onPress?: () => void;
  buttonStyles?: [];
}
const Button = (props: ButtonInterface) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.flex1,
        styles.paddingV10,
        styles.borderWidth1,
        styles.borderGray2,
        !!props?.buttonStyles && props.buttonStyles,
      ]}
      onPress={props.onPress}>
      <Text style={[styles.font14, styles.fontPoppinsRegular, styles.fontGray, styles.textCenter]}>
        Google
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
