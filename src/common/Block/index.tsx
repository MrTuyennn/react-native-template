import React, { memo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { IBlock } from './type';

const index = (props: IBlock) => {
  const {
    children,
    flex,
    row,
    color,
    align,
    justify,
    margin,
    marginT,
    marginB,
    marginL,
    marginR,
    marginH,
    marginV,
    padding,
    paddingB,
    paddingH,
    paddingL,
    paddingR,
    paddingT,
    paddingV,
    style,
  } = props;
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    row !== undefined && {flexDirection: 'row'},
    color !== undefined && {backgroundColor: color},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
    margin !== undefined && {margin},
    marginT !== undefined && {marginTop: marginT},
    marginB !== undefined && {marginBottom: marginB},
    marginL !== undefined && {marginLeft: marginL},
    marginR !== undefined && {marginRight: marginR},
    marginH !== undefined && {marginHorizontal: marginH},
    marginV !== undefined && {marginVertical: marginV},
    padding !== undefined && {padding},
    paddingB !== undefined && {paddingBottom: paddingB},
    paddingH !== undefined && {paddingHorizontal: paddingH},
    paddingL !== undefined && {paddingLeft: paddingL},
    paddingR !== undefined && {paddingRight: paddingR},
    paddingT !== undefined && {paddingTop: paddingT},
    paddingV !== undefined && {paddingVertical: paddingV},
    style,
  ]) as ViewStyle;
  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default memo(index);

