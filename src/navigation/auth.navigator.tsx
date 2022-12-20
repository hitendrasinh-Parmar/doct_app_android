import React from 'react';
import SignIn from '../screens/auth/sign-in.screen';
import { AuthRoutes, AuthStack } from './routes';
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={AuthRoutes.SignIn} component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
