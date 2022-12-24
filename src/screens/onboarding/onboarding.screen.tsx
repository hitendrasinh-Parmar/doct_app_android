import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import useTheme from '../../theme/useTheme';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LocalImages from '../../../assets/images/index';
import Styles from '../../styles/Styles';
import { hp, wp } from '../../services/ResponsiveDesign';
import Button from '../../components/buttons/Button';
const { height, width } = Dimensions.get('window');

type dataType = {
  id: number;
  title: string;
  subTitle: string;
  image: any;
  index?: number;
  translateX?: Animated.SharedValue<number>;
};

const renderItem = (props: dataType) => {
  const { index, image, id, title, translateX } = props;
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
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
        style={[styles.greenCircle, index && index % 2 !== 0 ? styles.rightGreen : styles.leftGreen, rStyle]}
      ></Animated.View>
      <Image source={image} style={[styles.circle]}></Image>
    </View>
  );
};

const Onboarding = () => {
  const theme = useTheme();
  const { onboarding1, onboarding2, onboarding3 } = LocalImages;
  const data: dataType[] = [
    {
      id: 1,
      title: 'One',
      subTitle: '',
      image: onboarding1,
    },
    {
      id: 2,
      title: 'Two',
      subTitle: '',
      image: onboarding2,
    },
    {
      id: 3,
      title: 'Three',
      subTitle: '',
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
      <Animated.ScrollView pagingEnabled horizontal onScroll={scrollHandler} scrollEventThrottle={16}>
        {data.map((item, index) => {
          return <>{renderItem({ ...item, index, translateX })}</>;
        })}
      </Animated.ScrollView>
      <Button text='Get Started' onPress={()=>{ console.log('button')}} />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
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
  linearGradient:{

  }
});
