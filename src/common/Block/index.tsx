import React, {memo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {IBlock} from './type';

const index = (props: IBlock) => {
  const {
    children,
    flex,
    alignSelf,
    height,
    width,
    row,
    overflow,
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
    border,
    borderColor,
    borderWidth,
    shadow,
    pos,
    top,
    bot,
    right,
    left,
    style,
  } = props;
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    alignSelf !== undefined && {alignSelf: alignSelf},
    row !== undefined && {flexDirection: 'row'},
    height !== undefined && {height},
    width !== undefined && {width},
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
    border !== undefined && {borderRadius: border},
    borderWidth !== undefined && {borderWidth: borderWidth},
    borderColor !== undefined && {borderColor: borderColor},
    overflow && {overflow},
    shadow && {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    pos !== undefined && {position: pos},
    top !== undefined && {top: top},
    bot !== undefined && {bottom: bot},
    right !== undefined && {right},
    left !== undefined && {left},
    style,
  ]) as ViewStyle;
  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default memo(index);
