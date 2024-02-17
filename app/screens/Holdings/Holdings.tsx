// Main listing screen of the stock holdings
import React, {useEffect, useState} from 'react';
import AppView from '../../components/AppView';
import Header from '../../components/Header';
import text from '../../utils/text';
import AppList from '../../components/AppList';
import HoldingItem from '../../components/HoldingItem';
import {HoldingItemType, HoldingResponseType} from '../../utils/interfaces';
import useGet from '../../hooks/useGet';
import {HOLDINGS_URL} from '../../utils/constants';
import styles from './styles';
import Portfolio from '../../components/Portfolio';
import {ActivityIndicator, ToastAndroid} from 'react-native';
import colors from '../../utils/colors';

const Holdings = () => {
  const [data, setData] = useState<HoldingItemType[]>([]);

  const {
    getNetworkCall: getHoldings,
    loading,
    error,
  } = useGet<HoldingResponseType>(HOLDINGS_URL, {});

  const _onMount = async () => {
    const response = await getHoldings();
    if (error) {
      ToastAndroid.show(
        error?.message ?? 'Error: could not get your holdings at the moment',
        ToastAndroid?.SHORT,
      );
      return;
    }
    setData(response?.data?.userHolding ?? []);
  };

  useEffect(() => {
    _onMount();
  }, []);

  return (
    <AppView style={styles.container}>
      <Header title={text['en'].UPSTOX_HOLDING} />
      {loading ? (
        <AppView style={styles.loadingView}>
          <ActivityIndicator size={30} color={colors.app_theme} />
        </AppView>
      ) : (
        <>
          <AppList
            keyExtractor={(_, index) => index.toString()}
            data={data}
            renderItem={HoldingItem}
          />
          <Portfolio data={data} />
        </>
      )}
    </AppView>
  );
};

export default Holdings;
