import React from 'react';
import AppView from '../AppView';
import AppText from '../AppText';
import styles from './styles';
import colors from '../../utils/colors';

type PropTypes = {
  title: string;
  value: string;
};

const PortfolioItem = ({title, value}: PropTypes) => {
  return (
    <AppView style={styles.portfolioItemView}>
      <AppText fontSize={15} color={colors.black} fontWeight="bold">
        {`${title}:`}
      </AppText>
      <AppText fontSize={14} color={colors.black}>
        {value}
      </AppText>
    </AppView>
  );
};

export default PortfolioItem;
