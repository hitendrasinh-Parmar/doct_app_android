import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Button from '../../components/buttons/Button';
import TextInput from '../../components/input/TextInput';
import { useLoading } from '../../context/loading.provider';
import useStyles from '../../styles/useStyles';
import { useTheme } from '../../theme/ThemeProvider';
import { ColorsInterface } from '../../types/global';
import { AppIcons } from '../../../assets/icons';
// import * as RootNavigator from '../../services/RootNavigationServices';
import * as LocalStorageServices from '../../services/LocalStorageServices';
import { setUser } from '../../redux/slices/userReducer';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const __s = useStyles();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userUserPassword, setUserPassword] = useState<string>('');
  const { theme }: { theme: ColorsInterface } = useTheme();
  const dispatch = useDispatch()
  const userInputLoader = useLoading();

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
      <KeyboardAvoidingView style={[__s.flex1, __s.bgColorlightBlue]}>
        <ScrollView style={[__s.flex1]}>
          <View style={[__s.paddingT100, __s.paddingB45, __s.alignJustifyCenter]}>
            <Text style={[__s.font24, __s.fontPoppinsBold, __s.fontBlack]}>Welcome back</Text>
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

          <View style={[__s.marginH16]}>
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
              secureTextEntry
            />
          </View>
          <View style={[__s.flexRow, __s.marginH16, __s.marginT32]}>
            <Button text='Google' btnGroup onPress={() => { }} />
            <Button text='Facebook' btnGroup lastbtn />
          </View>
          <View style={[__s.paddingV10, __s.marginH32, __s.marginT24]}>
            <Button
              activeOpacity={1}
              onPress={() => {
                LocalStorageServices.setItem('loggedinuser', { name: "'jonh" })
                dispatch(setUser({ name: "jonh" }));
              }}
              text='Login'
              buttonStyles={[__s.bgColorGreen, __s.paddingV18, __s.borderRadius10]}
              textStyle={[__s.fontWhite]}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={[
                __s.font12,
                __s.fontPoppinsRegular,
                __s.fontGreen,
                __s.flexWrap,
                __s.textCenter,
              ]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity>
          <Text
            style={[
              __s.font12,
              __s.fontPoppinsRegular,
              __s.fontGreen,
              __s.flexWrap,
              __s.textCenter,
              __s.marginB24,
            ]}>
            Don’t have an account? Join us
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
