import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LocalImages from '../../../assets/images/index';
import { hp, wp } from '../../services/ResponsiveDesign';
import Button from '../../components/buttons/Button';
import useStyles from '../../styles/useStyles';
const { height, width } = Dimensions.get('window');

type dataType = {
  id: number;
  title: string;
  subTitle: string;
  image: any;
  index?: number;
  translateX?: Animated.SharedValue<number>;
};

const RenderItem = (props: dataType) => {
  const { index = 0, image, id, title, subTitle, translateX }: dataType = props;
  const __s = useStyles();
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX?.value ? translateX.value : 0,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale: scale }],
    };
  });
  return (
    <View style={[{ width, backgroundColor: 'white' }]} key={props.id}>
      <Text>123</Text>
      <Animated.View
        style={[
          styles.greenCircle,
          index && index % 2 !== 0 ? styles.rightGreen : styles.leftGreen,
          rStyle,
        ]}></Animated.View>
      <Image source={image} style={[styles.circle]}></Image>
      <View style={[__s.alignJustifyCenter, __s.paddingV48]}>
        <Text style={[__s.font28, __s.fontPoppinsBold, __s.fontBlack]}>{title}</Text>
        <Text
          style={[
            __s.font14,
            __s.textCenter,
            __s.fontPoppinsRegular,
            __s.fontBlack,
            __s.paddingH35,
            __s.fontGray,
          ]}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

const Onboarding = () => {
  const { onboarding1, onboarding2, onboarding3 } = LocalImages;
  const __s = useStyles();

  const data: dataType[] = [
    {
      id: 1,
      title: 'Find Trusted Doctors',
      subTitle:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.',
      image: onboarding1,
    },
    {
      id: 2,
      title: 'Choose Best Doctors',
      subTitle:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.',
      image: onboarding2,
    },
    {
      id: 3,
      title: 'Easy Appointments',
      subTitle:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.',
      image: onboarding3,
    },
  ];
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    console.log('event.contentOffset.x =>', event.contentOffset.x);
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={[styles.container]}>
      <Animated.ScrollView
        pagingEnabled
        horizontal
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        {data.map((item, index) => {
          return <>{RenderItem({ ...item, index, translateX })}</>;
        })}
      </Animated.ScrollView>
      <View style={[__s.paddingH24]}>
        <Button
          text='Get Started'
          onPress={() => {}}
          buttonStyles={[__s.bgColorGreen, __s.borderRadius10]}
          textStyle={[__s.fontWhite]}
        />
        <TouchableOpacity>
          <Text
            style={[
              __s.font14,
              __s.fontPoppinsRegular,
              __s.fontGray,
              __s.flexWrap,
              __s.textCenter,
              __s.marginV16,
            ]}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    height: 330,
    width: 330,
    borderRadius: 270,
    resizeMode: 'contain',
    backgroundColor: 'gray',
    marginTop: hp(100),
    marginLeft: wp(24),
  },
  greenCircle: {
    height: 350,
    width: 350,
    borderRadius: 280,
    resizeMode: 'contain',
    backgroundColor: 'lightgreen',
    position: 'absolute',
  },
  leftGreen: {
    top: -50,
    left: -150,
  },
  rightGreen: {
    right: -150,
    top: -50,
  },
  linearGradient: {},
});
