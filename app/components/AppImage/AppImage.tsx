import React from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';

interface PropTypes {
  source: ImageSourcePropType;
  style?: ImageStyle;
  resizeMode?: ImageResizeMode;
}

const AppImage = ({style, resizeMode, source}: PropTypes) => {
  return <Image style={style} resizeMode={resizeMode} source={source} />;
};

export default AppImage;
