// import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import AuthNavigator from './auth.navigator';
import MainNavigator from './main.navigator';
import OnboardingNavigator from './onboarding.navigator';
import { RootRoutes, RootStack } from './routes';
import { useSelector } from 'react-redux';
import rootReducer from '../redux/rootReducer';
const isOnboardingComplete = true;
const Root = () => {
  const user = useSelector((state) => state?.userReducer);
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
