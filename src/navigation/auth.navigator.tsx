import React from 'react';
import SignIn from '../screens/auth/sign-in.screen';
import SingUp from '../screens/auth/sign-up.screen';
import Onboarding from '../screens/onboarding/onboarding.screen';

import { AuthRoutes, AuthStack, OnboardingRoutes } from './routes';
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AuthRoutes.SignIn}>
      <AuthStack.Screen name={OnboardingRoutes.Onboarding} component={Onboarding} />
      <AuthStack.Screen name={AuthRoutes.SignIn} component={SignIn} />
      <AuthStack.Screen name={AuthRoutes.SignUp} component={SingUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
