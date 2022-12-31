// import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import { Text } from 'react-native';
import AuthNavigator from './auth.navigator';
import MainNavigator from './main.navigator';
import OnboardingNavigator from './onboarding.navigator';
import { RootRoutes, RootStack } from './routes';
import { useUserState } from '../context/user.temp.context';
const tempvalidUser = false;
const isOnboardingComplete = true;
const Root = () => {
  const { setUser, user } = useUserState();

  useEffect(() => {
    console.log('useEffect', user);
  }, [user]);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={RootRoutes.Auth}>
      {user ? (
        <RootStack.Screen name={RootRoutes.Main} component={MainNavigator} />
      ) : isOnboardingComplete ? (
        <RootStack.Screen name={RootRoutes.Auth} component={AuthNavigator} />
      ) : (
        <RootStack.Screen name={RootRoutes.Onboarding} component={OnboardingNavigator} />
      )}
    </RootStack.Navigator>
  );
};
export default Root;
