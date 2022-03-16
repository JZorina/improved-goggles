import {IColors} from './Colors';
import {IFontSizes} from './fontSizes';

export interface ITheme extends ReactNativePaper.Theme {
  colors: IColors;
  fontSizes: IFontSizes;
  globalStyles: any;
  Images: any;
  LottieAnimations: any;
}
