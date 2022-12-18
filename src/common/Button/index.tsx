import {Text} from '@common';
import React, { memo } from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from 'themes';
import Block from '../Block';
import {getDefaultButtonStyles, IButtonProps} from './type';

const index = (props: IButtonProps) => {
  const {Colors} = useTheme();
  const {
    children,
    flex,
    row,
    type = 'solid',
    height,
    width,
    disabled,
    loading,
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
    pos,
    top,
    bot,
    right,
    left,
    style,
    onPress,
    title,
    titleStyleProp,
    iconRight,
    iconRightContainerStyle,
    iconLeft,
    iconLeftContainerStyle,
  } = props;
  const buttonStyle = StyleSheet.flatten([
    {justifyContent: 'center'},
    getDefaultButtonStyles({
      type,
      Colors,
      isDisabled: disabled || loading,
    }),
    flex !== undefined && {flex},
    row !== undefined && {flexDirection: 'row'},
    color !== undefined && {backgroundColor: color},
    height !== undefined && {height},
    width !== undefined && {width},
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
    pos !== undefined && {position: pos},
    top !== undefined && {top: top},
    bot !== undefined && {bottom: bot},
    right !== undefined && {right},
    left !== undefined && {left},
    style,
  ]) as ViewStyle;

  const _renderIcon = (isRight?: Boolean) => {
    return (
      <Block
        style={isRight ? iconRightContainerStyle : iconLeftContainerStyle}
        marginL={isRight ? 10 : 0}
        marginR={isRight ? 0 : 10}>
        {isRight ? iconRight : iconLeft}
      </Block>
    );
  };

  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
      style={buttonStyle}>
      {children ? (
        children
      ) : (
        <Block alignSelf="center" row>
          {iconRight && _renderIcon(true)}
          <Block flex={1} justify="center">
            <Text
              color={type === 'clear' ? Colors.blueOpa : Colors.white}
              {...titleStyleProp}
              align="center">
              {title}
            </Text>
          </Block>
          {iconLeft && _renderIcon(false)}
        </Block>
      )}
    </Pressable>
  );
};

export default memo(index);
