import {StyleSheet} from 'react-native';
import {colors} from './Colors';

const globalStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  standardEmptyFooter: {
    width: '100%',
    height: 150,
  },
  linkBtnPress: {
    color: colors.trueBlue,
    textDecorationLine: 'underline',
  },
  linkBtnNormal: {
    color: colors.bluey,
  },
  regularButton: {
    backgroundColor: colors.primaryBlueLight,
    width: '70%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    color: colors.white,
    paddingTop: 1,
  },
  errorButton: {
    backgroundColor: colors.secondryRed,
    width: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    color: colors.primaryRedLight,
    paddingTop: 1,
  },
  regularButtonDisabled: {
    backgroundColor: colors.lavenderMist,
  },
});

export default globalStyles;
