import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../theme/useTheme';
import Button from '../../components/buttons/Button';
const SignIn = () => {
  console.log('[SignIn]');

  // const style = useThemedStyles(styles);

  const style = useTheme();

  return (
    <View style={[style.flex1]}>
      <View style={[style.paddingT100, style.alignJustifyCenter]}>
        <Text style={[style.font24, style.fontPoppinsBold, style.fontBlack]}>
          Join us to start searching
        </Text>
        <Text
          style={[
            style.font14,
            style.fontPoppinsRegular,
            style.fontGray,
            style.flexWrap,
            style.textCenter,
          ]}
        >
          You can search course, apply course and find scholarship for abroad studies
        </Text>
      </View>
      <Button />
    </View>
  );
};

// const styles = (theme: themeKeys) =>
//   StyleSheet.create({
//     container: theme.flex1,
//   });

export default SignIn;
