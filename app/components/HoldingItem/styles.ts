import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    backgroundColor: colors?.white,
    borderBottomWidth: 1,
    borderBottomColor: colors?.grey,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerText: {
    marginTop: 5,
  },
});

export default styles;
