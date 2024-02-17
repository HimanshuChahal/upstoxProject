import React from 'react';
import AppView from '../AppView';
import styles from './styles';
import AppText from '../AppText';
import colors from '../../utils/colors';

type PropTypes = {
  title: string;
};

const Header = ({title}: PropTypes) => {
  return (
    <AppView style={styles.container}>
      <AppText fontSize={16} color={colors?.white} fontWeight="500">
        {title}
      </AppText>
    </AppView>
  );
};

export default Header;
