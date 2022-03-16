import {StyleSheet} from 'react-native';
import {Theme} from '../../Theme';

export default StyleSheet.create({
  text: {
    color: Theme.colors.black,
    fontSize: Theme.fontSizes.sm,
  },

  smallText: {
    ...Theme.fontSizes.xxs,
  },
  mdlText: {
    ...Theme.fontSizes.mdl,
  },
});
