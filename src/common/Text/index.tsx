import {StyleSheet, Text as ReactNativeText, TextStyle} from 'react-native';
import React, {memo} from 'react';
import {IText} from './type';

const index = (props: IText) => {
  const {children, h1, h2, h3, h4, p, size, align, style, color, weight} =
    props;

  const textStyle = StyleSheet.flatten([
    {fontSize: 16},
    h1 !== undefined && {fontSize: 36, fontWeight: '800'},
    h2 !== undefined && {fontSize: 28, fontWeight: '700'},
    h3 !== undefined && {fontSize: 24, fontWeight: '600'},
    h4 !== undefined && {fontSize: 22, fontWeight: '500'},
    p !== undefined && {fontSize: 18},
    size !== undefined && {fontSize: size},
    weight !== undefined && {fontWeight: weight},
    color !== undefined && {color},
    align !== undefined && {textAlign: align},
    style,
  ]) as TextStyle;
  if (children === undefined || children === null) {
    return null;
  }
  return (
    <ReactNativeText allowFontScaling={false} style={textStyle} {...props}>
      {children}
    </ReactNativeText>
  );
};

export default memo(index);
