import React from 'react';
import {HoldingItemType} from '../../utils/interfaces';
import AppView from '../AppView';
import styles from './styles';
import AppText from '../AppText';
import colors from '../../utils/colors';

type PropTypes = {
  item: HoldingItemType;
  index: number;
};

const HoldingItem = ({item}: PropTypes) => {
  const calculatePnL = (ltp: number, quantity: number, avgPrice: number) => {
    const currentValue = ltp * quantity;
    const investmentValue = avgPrice * quantity;
    return (currentValue - investmentValue)?.toFixed?.(2);
  };

  return (
    <AppView style={styles.container}>
      <AppView>
        <AppText fontSize={15} color={colors?.black} fontWeight="bold">
          {item?.symbol}
        </AppText>
        <AppText
          style={styles.lowerText}
          fontSize={14}
          color={colors?.black}>{`${item?.quantity ?? ''}`}</AppText>
      </AppView>
      <AppView>
        <AppText fontSize={14} color={colors.black}>
          LTP:
          <AppText fontSize={15} color={colors.black} fontWeight="bold">
            {`  ₹${item?.ltp ?? ''}`}
          </AppText>
        </AppText>
        <AppText style={styles.lowerText} fontSize={14} color={colors?.black}>
          P/L:
          <AppText fontSize={15} color={colors.black} fontWeight="bold">
            {`  ₹${
              calculatePnL(item?.ltp, item?.quantity, item?.avgPrice) ?? ''
            }`}
          </AppText>
        </AppText>
      </AppView>
    </AppView>
  );
};

export default HoldingItem;
