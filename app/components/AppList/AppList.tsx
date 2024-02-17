import React from 'react';
import {FlatList} from 'react-native';

type PropTypes = {
  data: any[];
  keyExtractor: (item: any, index: number) => string;
  renderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
  showsVerticalScrollIndicator?: boolean;
};

const AppList = ({
  data,
  keyExtractor,
  renderItem,
  showsVerticalScrollIndicator,
}: PropTypes) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default AppList;
