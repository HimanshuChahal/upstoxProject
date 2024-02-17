import React from 'react';
import {GestureResponderEvent, TouchableOpacity, ViewStyle} from 'react-native';

interface PropTypes {
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
  activeOpacity?: number;
}

const AppButton = ({
  style,
  onPress,
  children,
  disabled,
  activeOpacity,
}: PropTypes) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

export default AppButton;
