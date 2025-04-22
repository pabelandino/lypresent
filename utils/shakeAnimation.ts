import { Animated } from 'react-native';

export const startShakeAnimation = (animatedValue: Animated.Value) => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]),
  ).start();
};

export const stopShakeAnimation = (animatedValue: Animated.Value) => {
  animatedValue.stopAnimation();
  animatedValue.setValue(0);
};
