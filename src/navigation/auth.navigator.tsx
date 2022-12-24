import React from 'react';
import SignIn from '../screens/auth/sign-in.screen';
import Onboarding from '../screens/onboarding/onboarding.screen';
import { AuthRoutes, AuthStack, OnboardingRoutes } from './routes';
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={OnboardingRoutes.Onboarding} component={Onboarding} />
      <AuthStack.Screen name={AuthRoutes.SignIn} component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
