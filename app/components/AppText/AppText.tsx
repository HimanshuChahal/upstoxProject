import React from 'react';
import {Text, TextStyle} from 'react-native';
import {DeviceWidth} from '../../utils/constants';

interface PropTypes {
  fontSize: number;
  color: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '200'
    | '100'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: TextStyle;
  children?: React.ReactNode;
}

const AppText = ({fontSize, color, fontWeight, style, children}: PropTypes) => {
  const fontSizeScale = DeviceWidth < 1200 ? 1 : 1.5;
  const mappedWeight = {
    light: '200',
  };
  return (
    <Text
      style={[
        style ?? {},
        {
          fontSize: fontSize * fontSizeScale,
          color,
          fontWeight,
        },
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
