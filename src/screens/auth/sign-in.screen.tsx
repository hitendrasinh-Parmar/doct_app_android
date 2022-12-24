import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/input/TextInput';
import { useLoading } from '../../context/loading.provider';
import useStyles from '../../styles/useStyles';
import { useTheme } from '../../theme/ThemeProvider';
import { ColorsInterface } from '../../types/global';
import { AppIcons } from '../../../assets/icons';

const SignIn = () => {
  const __s = useStyles();
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userUserPassword, setUserPassword] = useState<string>('');
  const { theme }: { theme: ColorsInterface } = useTheme();
  const userInputLoader = useLoading();

  const handleUserNameOnChangeText = useCallback(
    (e: string) => {
      setUserName(e);
    },
    [setUserName]
  );

  const handleEmailOnChangeText = useCallback(
    (e: string) => {
      setUserEmail(e);
    },
    [setUserEmail]
  );

  const handleUserPasswordChangeText = useCallback(
    (e: string) => {
      setUserPassword(e);
    },
    [setUserPassword]
  );
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
        <View style={[__s.flexRow, __s.marginH16]}>
          <Button text='Google' btnGroup onPress={() => {}} />
          <Button text='Facebook' btnGroup lastbtn />
        </View>
        <View style={[__s.marginH16]}>
          <TextInput
            value={userName}
            onChangeText={handleUserNameOnChangeText}
            placeholderTextColor={theme.gray}
            placeholderText={'Name'}
            wrapperStyle={[__s.marginT12, __s.borderRadius4]}
          />
          <TextInput
            value={userEmail}
            onChangeText={handleEmailOnChangeText}
            placeholderTextColor={theme.gray}
            placeholderText={'Email'}
            wrapperStyle={[__s.marginT12, __s.borderRadius4]}
          />
          <TextInput
            value={userUserPassword}
            onChangeText={handleUserPasswordChangeText}
            placeholderTextColor={theme.gray}
            placeholderText={'Password'}
            wrapperStyle={[__s.marginT12, __s.borderRadius4]}
            icon={AppIcons.hide_password}
            iconPosition={'right'}
            secureTextEntry
          />
        </View>
        <View style={[__s.paddingV10, __s.marginH16]}>
          <Button text='Sign In' buttonStyles={[__s.bgColorGreen]} textStyle={[__s.fontWhite]} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
