import React from 'react';
import TabsNavigator from './tabs.navigator';
import { MainRoutes, MainStack } from './routes';
import SeeAllScreen from '../screens/SeeAllScreen';

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={MainRoutes.Tabs} component={TabsNavigator} />
      <MainStack.Screen name={MainRoutes.SeeAllScreen} component={SeeAllScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
