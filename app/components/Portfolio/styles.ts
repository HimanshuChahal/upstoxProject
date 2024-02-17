import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  bottomSummary: {
    position: 'absolute',
    padding: 15,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors?.white,
    zIndex: 1,
  },
  caretImage: {
    height: 10,
    alignSelf: 'center',
    tintColor: colors.light_app_theme,
  },
  portfolioItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expandableView: {
    marginBottom: 30,
  },
});

export default styles;
