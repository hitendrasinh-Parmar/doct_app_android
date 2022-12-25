import React from 'react';
import { View } from 'react-native';
import BlogNavigator from './blog.navigator';
import ChatNavigator from './chat.navigator';
import FavouriteScreenNavigator from './Favourite.navigator';
import ProfileNavigator from './profile.navigator';
import { TabsRoutes, TabsStack } from './routes';
const HomeTabsNavigator = (): React.ReactElement => {
  return (
    <TabsStack.Navigator initialRouteName={TabsRoutes.Home} screenOptions={{ headerShown: false }}>
      <TabsStack.Screen name={TabsRoutes.Home} component={ProfileNavigator} />
      <TabsStack.Screen name={TabsRoutes.Blog} component={BlogNavigator} />
      <TabsStack.Screen name={TabsRoutes.Favourite} component={FavouriteScreenNavigator} />
      <TabsStack.Screen name={TabsRoutes.Chat} component={ChatNavigator} />
    </TabsStack.Navigator>
  );
};

export default HomeTabsNavigator;
