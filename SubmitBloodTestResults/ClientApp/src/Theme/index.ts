import {DefaultTheme} from 'react-native-paper';
import {colors} from './Colors';
import {fontSizes} from './FontSizes';
import globalStyles from './GlobalStyles';
import {ITheme} from './ITheme';
import Images from './Images';
import LottieAnimations from './LottieAnimations';

const Theme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fontSizes,
  globalStyles,
  Images,
  LottieAnimations
};

export {Theme};
