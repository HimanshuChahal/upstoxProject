import React from 'react';
import {View, ViewStyle} from 'react-native';

interface PropTypes {
  children?: JSX.Element | JSX.Element[];
  style?: ViewStyle;
}

const AppView = ({style, children}: PropTypes) => {
  return <View style={style}>{children}</View>;
};

export default AppView;
