import React from 'react';
import TabsNavigator from './tabs.navigator';
import { MainRoutes, MainStack } from './routes';

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={MainRoutes.Tabs} component={TabsNavigator} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
