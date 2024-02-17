import React, {useState} from 'react';
import AppButton from '../AppButton';
import {Animated} from 'react-native';
import AppView from '../AppView';
import AppText from '../AppText';
import colors from '../../utils/colors';
import styles from './styles';
import text from '../../utils/text';
import {HoldingItemType} from '../../utils/interfaces';
import PortfolioItem from '../PortfolioItem';

type PropTypes = {
  data: HoldingItemType[];
};

const Portfolio = ({data}: PropTypes) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onPress = () => {
    setIsOpen(!isOpen);
  };

  const calculateTotalValue = (
    p0: HoldingItemType[],
    type: 'current' | 'investment',
  ) => {
    const arg = type === 'current' ? 'ltp' : 'avgPrice';
    return Number(
      p0
        ?.reduce(
          (prev, curr) => prev + (curr?.[arg] ?? 1) * (curr?.quantity ?? 1),
          0,
        )
        ?.toFixed?.(2),
    );
  };

  const calculateTotalProfitAndLoss = (p0: HoldingItemType[]) => {
    return (
      calculateTotalValue(p0, 'current') + calculateTotalValue(p0, 'investment')
    )?.toFixed?.(2);
  };

  const calculateTodaysProfitAndLoss = (p0: HoldingItemType[]) => {
    return p0
      ?.reduce(
        (prev, curr) => prev + (curr.close - curr.ltp) * (curr.quantity ?? 1),
        0,
      )
      ?.toFixed?.(2);
  };

  return (
    <AppButton
      style={styles.bottomSummary}
      onPress={onPress}
      activeOpacity={0.8}>
      <Animated.Image
        style={[
          {transform: [{rotate: isOpen ? '180deg' : '0deg'}]},
          styles.caretImage,
        ]}
        source={require('../../assets/images/caret_up.png')}
        resizeMode="contain"
      />
      <AppView style={{...styles.expandableView, height: isOpen ? 100 : 0}}>
        <PortfolioItem
          title={text['en'].CURRENT_VALUE}
          value={`₹${calculateTotalValue(data, 'current')}`}
        />
        <PortfolioItem
          title={text['en'].TOTAL_INVESTMENT}
          value={`₹${calculateTotalValue(data, 'investment')}`}
        />
        <PortfolioItem
          title={text['en'].TODAYS_PROFIT_N_LOSS}
          value={`₹${calculateTodaysProfitAndLoss(data)}`}
        />
      </AppView>
      <AppView style={styles.portfolioItemView}>
        <AppText fontSize={15} color={colors.black} fontWeight="bold">
          {`${text['en'].PROFIT_N_LOSS}:`}
        </AppText>
        <AppText fontSize={14} color={colors.black}>
          {`₹${calculateTotalProfitAndLoss(data)}`}
        </AppText>
      </AppView>
    </AppButton>
  );
};

export default Portfolio;
