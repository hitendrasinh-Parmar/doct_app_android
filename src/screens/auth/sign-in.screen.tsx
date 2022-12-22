import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/buttons/Button';
import useStyles from '../../styles/useStyles';

const SignIn = () => {
  const __s = useStyles();
  return (
    <View style={[__s.flex1]}>
      <View style={[__s.paddingV100, __s.alignJustifyCenter]}>
        <Text style={[__s.font24, __s.fontPoppinsBold, __s.fontBlack]}>
          Join us to start searching
        </Text>
        <Text
          style={[__s.font14, __s.fontPoppinsRegular, __s.fontGray, __s.flexWrap, __s.textCenter]}>
          You can search course, apply course and find scholarship for abroad studies
        </Text>
      </View>
      <View style={[__s.flexRow]}>
        <Button text={'Google'} onPress={() => {}} />
        <Button text='Facebook' />
      </View>
    </View>
  );
};

export default SignIn;
