import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../Theme';

const styles = StyleSheet.create({
  regular: {
    ...Theme.globalStyles.regularButton,
  },
  error: {
    ...Theme.globalStyles.errorButton,
  },
  none: {},
  text: {
    transform: [{translateY: Platform.OS === 'ios' ? -2 : 1}],
    color: Theme.colors.white,
  },
  errorText: {
    transform: [{translateY: Platform.OS === 'ios' ? -2 : 1}],
    color: Theme.colors.primaryRedLight,
  },
  disabled: {
    opacity: 0.22,
  },
});

export default styles;
