import React from 'react';
import { View, Text } from 'react-native';
import useTheme from '../../theme/useTheme';
const SignIn = () => {
  console.log('[SignIn]');

  // const style = useThemedStyles(styles);

  const _tm = useTheme();
  return (
    <View style={[_tm.flex1]}>
      <Text>SignIn</Text>
    </View>
  );
};

// const styles = (theme: themeKeys) =>
//   StyleSheet.create({
//     container: theme.flex1,
//   });

export default SignIn;
