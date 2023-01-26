import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import PopularCardFragment from '../../components/homefragmens/PopularCardFragment';
import useStyles from '../../styles/useStyles';
import { AppIcons } from '../../../assets/icons';
import ImageFragment from '../../components/images/ImageFragment'
import * as RootNavigator from '../../services/RootNavigationServices';
import { MainRoutes } from '../../navigation/routes';
const HomeScreen = () => {
  // console.log('[HomeScreen]');
  const __s = useStyles();
  const { docprofile2 } = AppIcons;

  const renderPopularCardFragment = () => {
    return (
      <PopularCardFragment />
    )
  }

  const renderPopularCardFragmentHeading = () => {
    return (
      <View style={[__s.flexRow, __s.alignCenter]}>
        <View style={[__s.flex1]}>
          <Text
            style={[
              __s.font18,
              __s.fontPoppinsBold,
              __s.fontBlack,
              // __s.marginB10
            ]}>
            Popular Doctor
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {
            RootNavigator.navigate(MainRoutes.SeeAllScreen)
          }}>
            <Text
              style={[
                __s.font12,
                __s.fontPoppinsRegular,
                __s.fontGreen,
              ]}>
              Seeall
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderHeader = () => {
    return (
      <View style={[__s.paddingV10, __s.bgColorGreen, __s.flexRow, __s.paddingH24, __s.paddingV24, __s.borderRadiusB25]}>
        <View style={[__s.flex1]}>
          <Text
            style={[
              __s.font20,
              __s.fontPoppinsRegular,
              __s.fontWhite,
              // __s.marginB10
            ]}>
            Hi Handwerker!
          </Text>
          <Text
            style={[
              __s.font24,
              __s.fontPoppinsBold,
              __s.fontWhite,
            ]}>
            Find Your Doctor
          </Text>
        </View>
        <View>
          <ImageFragment imgUrl={docprofile2} imgStyle={[__s.height70, __s.width70, __s.borderRadius100]} />
        </View>
      </View>
    )
  }
  return (
    <View style={[__s.flex1]}>
      {renderHeader()}
      <View style={[__s.marginV10, __s.paddingH16]}>
        {renderPopularCardFragmentHeading()}
        <FlatList
          data={[0, 0, 0, 0, 0]}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={() => renderPopularCardFragment()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
