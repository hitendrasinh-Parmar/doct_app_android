import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ImageCustom from '../components/images/ImageCustom';
import useStyles from '../styles/useStyles';
import useTheme from '../theme/useTheme';
import BlogNavigator from './blog.navigator';
import ChatNavigator from './chat.navigator';
import FavouriteScreenNavigator from './favourite.navigator';
import HomeNavigator from './home.navigator';
import { TabsRoutes, TabsStack } from './routes';
import { AppIcons } from '../../assets/icons';

const HomeTabsNavigator = (): React.ReactElement => {
  const __s = useStyles();
  const HomeNavigatorFragment = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const currentIndex = useMemo(() => {
      return state.index;
    }, [state]);

    return (
      <View style={[__s.flexRow, __s.borderRadiusT10, __s.bgColorGreen, __s.overflowHidden]}>
        <TouchableOpacity
          style={[__s.flex1, currentIndex === 0 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[0])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageCustom imgUrl={AppIcons.home} wrapperStyle={[]} />
          </View>
          {currentIndex === 0 && __s.bgColorGray2 && (
            <View style={[__s.paddingV3, __s.bgColorWhite]} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[__s.flex1, currentIndex === 1 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[1])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageCustom imgUrl={AppIcons.heart} />
          </View>
          {currentIndex === 1 && __s.bgColorGray2 && (
            <View style={[__s.paddingV3, __s.bgColorWhite]} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[__s.flex1, currentIndex === 2 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[2])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageCustom imgUrl={AppIcons.blog} />
          </View>
          {currentIndex === 2 && __s.bgColorGray2 && (
            <View style={[__s.paddingV3, __s.bgColorWhite]} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[__s.flex1, currentIndex === 3 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[3])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageCustom imgUrl={AppIcons.chat} />
          </View>
          {currentIndex === 3 && __s.bgColorGray2 && (
            <View style={[__s.paddingV3, __s.bgColorWhite]} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <TabsStack.Navigator
      initialRouteName={TabsRoutes.Home}
      screenOptions={{ headerShown: false }}
      tabBar={(props) => {
        // it's ok here
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <HomeNavigatorFragment {...props} />;
      }}>
      <TabsStack.Screen name={TabsRoutes.Home} component={HomeNavigator} />
      <TabsStack.Screen name={TabsRoutes.Blog} component={BlogNavigator} />
      <TabsStack.Screen name={TabsRoutes.Favourite} component={FavouriteScreenNavigator} />
      <TabsStack.Screen name={TabsRoutes.Chat} component={ChatNavigator} />
    </TabsStack.Navigator>
  );
};

export default HomeTabsNavigator;
