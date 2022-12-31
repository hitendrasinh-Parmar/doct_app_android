import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import ImageFragment from '../components/images/ImageFragment';
import useStyles from '../styles/useStyles';
import BlogNavigator from './blog.navigator';
import ChatNavigator from './chat.navigator';
import FavouriteScreenNavigator from './favourite.navigator';
import { TabsRoutes, TabsStack } from './routes';
import { AppIcons } from '../../assets/icons';
import HomeScreen from '../screens/home/HomeScreen';

const TabsNavigator = (): React.ReactElement => {
  const __s = useStyles();
  const HomeNavigatorFragment = ({ state, navigation }: BottomTabBarProps) => {
    const currentIndex = useMemo(() => {
      return state.index;
    }, [state]);

    return (
      <View style={[__s.flexRow, __s.borderRadiusT10, __s.bgColorGreen, __s.overflowHidden]}>
        <TouchableOpacity
          style={[__s.flex1, currentIndex === 0 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[0])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageFragment imgUrl={AppIcons.home} wrapperStyle={[]} />
          </View>
          {currentIndex === 0 && __s.bgColorGray2 && (
            <View style={[__s.paddingV3, __s.bgColorWhite]} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[__s.flex1, currentIndex === 1 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[1])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageFragment imgUrl={AppIcons.heart} />
          </View>
          {currentIndex === 1 && __s.bgColorGray2 && (
            <View style={[__s.paddingV3, __s.bgColorWhite]} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[__s.flex1, currentIndex === 2 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[2])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageFragment imgUrl={AppIcons.blog} />
          </View>
          {currentIndex === 2 && __s.bgColorGray2 && (
            <View style={[__s.paddingV3, __s.bgColorWhite]} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[__s.flex1, currentIndex === 3 && __s.bgColorGray2]}
          onPress={() => navigation.navigate(state.routeNames[3])}>
          <View style={[__s.alignJustifyCenter, __s.paddingH12, __s.paddingV20]}>
            <ImageFragment imgUrl={AppIcons.chat} />
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
      <TabsStack.Screen name={TabsRoutes.Home} component={HomeScreen} />
      <TabsStack.Screen name={TabsRoutes.Blog} component={BlogNavigator} />
      <TabsStack.Screen name={TabsRoutes.Favourite} component={FavouriteScreenNavigator} />
      <TabsStack.Screen name={TabsRoutes.Chat} component={ChatNavigator} />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;
