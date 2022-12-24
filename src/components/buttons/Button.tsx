import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getColor } from '../../services/utils';
import Styles from '../../styles/Styles';
import { ThemeContext } from '../../theme/ThemeProvider';
import useTheme from '../../theme/useTheme';

interface ButtonInterface {
  text: string;
  onPress?: () => void;
  buttonStyles?: [];
}
const Button = (props: ButtonInterface) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        Styles.flex1,
        Styles.paddingV10,
        Styles.borderWidth1,
        Styles.borderGray2,
        !!props?.buttonStyles && props.buttonStyles,
        {backgroundColor: theme.btnPrimary}
      ]}
      onPress={props.onPress}
    >
      <Text style={[Styles.font14, Styles.fontPoppinsRegular, Styles.fontGray, Styles.textCenter]}>
        Button
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  // btnBg: {
  //   backgroundColor: getColor('btnPrimary'),
  // }
})