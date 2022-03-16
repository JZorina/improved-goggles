import React, {useEffect, useRef} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieProps {
  animation:
    | string
    | {
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: any[];
        layers: any[];
      }
    | {uri: string};
  style?: StyleProp<ViewStyle>;
  skipAnimation?: boolean;
  loop?: boolean;
  duration?: number;
}

const Lottie = ({
  animation,
  style,
  duration,
  skipAnimation = false,
  loop = false,
}: LottieProps) => {
  const lottieRef = useRef<any>();

  useEffect(() => {
    if (skipAnimation) {
      /* Assume that animation wont have more than 10000 frames*/
      lottieRef.current.play(10000, 10000);
    } else {
      lottieRef.current.play();
    }
  }, [skipAnimation, lottieRef]);

  return (
    <LottieView
      duration={duration}
      ref={lottieRef}
      source={animation}
      autoPlay={false}
      style={style}
      loop={loop}
    />
  );
};

export default Lottie;
