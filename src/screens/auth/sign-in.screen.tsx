import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/input/TextInput';
import { useLoading } from '../../context/loading.provider';
import useStyles from '../../styles/useStyles';
import { useTheme } from '../../theme/ThemeProvider';
import { ColorsInterface } from '../../types/global';

const SignIn = () => {
  const __s = useStyles();
  const [userName, setUserName] = useState<string>('');
  const { theme }: { theme: ColorsInterface } = useTheme();
  const userInputLoader = useLoading();
  const handleUserNameOnChangeText = (e: string) => {
    setUserName(e);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[__s.flex1]}>
        <View style={[__s.paddingV100, __s.alignJustifyCenter]}>
          <Text style={[__s.font24, __s.fontPoppinsBold, __s.fontBlack]}>
            Join us to start searching
          </Text>
          <Text
            style={[
              __s.font14,
              __s.fontPoppinsRegular,
              __s.fontGray,
              __s.flexWrap,
              __s.textCenter,
            ]}>
            You can search course, apply course and find scholarship for abroad studies
          </Text>
        </View>
        <View style={[__s.flexRow]}>
          <Button text={'Google'} onPress={() => {}} />
          <Button text='Facebook' />
        </View>
        <View>
          <TextInput
            value={userName}
            onChangeText={handleUserNameOnChangeText}
            placeholderTextColor={theme.gray}
            placeholder={'Enter user name'}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
