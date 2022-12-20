import React from 'react';
import { View } from 'react-native';
import ProfileNavigator from './profile.navigator';
import { TabsRoutes, TabsStack } from './routes';
const HomeTabsNavigator = (): React.ReactElement => {
  return (
    <TabsStack.Navigator
      initialRouteName={TabsRoutes.Profile}
      screenOptions={{ headerShown: false }}
    >
      <TabsStack.Screen name={TabsRoutes.Profile} component={ProfileNavigator} />
    </TabsStack.Navigator>
  );
};

export default HomeTabsNavigator;
