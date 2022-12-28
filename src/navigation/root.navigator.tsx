// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Text } from 'react-native';
import AuthNavigator from './auth.navigator';
import MainNavigator from './main.navigator';
import OnboardingNavigator from './onboarding.navigator';
import { RootRoutes, RootStack } from './routes';

const tempvalidUser = false;
const isOnboardingComplete = false;
const Root = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {tempvalidUser ? (
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
