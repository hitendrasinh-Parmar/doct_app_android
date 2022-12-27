import React from 'react';
import SignIn from '../screens/auth/sign-in.screen';
import SingUp from '../screens/auth/sign-up.screen';
import Onboarding from '../screens/onboarding/onboarding.screen';

import { OnboardingStack, OnboardingRoutes } from './routes';
const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={OnboardingRoutes.Onboarding}>
      <OnboardingStack.Screen name={OnboardingRoutes.Onboarding} component={Onboarding} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
