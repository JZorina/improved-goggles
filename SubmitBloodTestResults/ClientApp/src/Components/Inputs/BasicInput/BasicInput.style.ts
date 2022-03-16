import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../Theme';

export default StyleSheet.create({
  container: {
    height: 27,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 27,
    borderBottomWidth: 1,
    paddingBottom: 4,
    position: 'relative',
  },
  center: {
    ...Theme.globalStyles.center,
  },
  searchIconContainer: {
    marginEnd: 12,
  },
  searchIcon: {
    height: 21,
    width: 21,
  },
  input: {
    padding: 0,
    transform: [{translateY: Platform.OS === 'ios' ? 2 : 4}],
    fontSize: Theme.fontSizes.smd,
  },
  clearIconContainer: {
    padding: 6,
    paddingEnd: 0,
    position: 'absolute',
    end: 0,
    top: 0,
  },
  clearIcon: {
    height: 12,
    width: 12,
  },
  containerActive: {
    borderBottomColor: Theme.colors.primaryBlueLight,
  },
  containerFilled: {
    borderBottomColor: Theme.colors.black,
   
  },
  containerEmpty: {
    borderBottomColor: Theme.colors.dimGray,
  },
  textStyle: {
    color: Theme.colors.black,
  },
  placeholderStyle: {
    color: Theme.colors.dimGray,
  },
});
