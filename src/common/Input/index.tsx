import {IconInvisible, IconVisibility} from '@assets/Icons';
import {Block, Button, Text} from '@common';
import {Iwidth} from '@utils/contant';
import React, {memo} from 'react';
import {StyleSheet, TextInput, ViewStyle} from 'react-native';
import {useTheme} from 'themes';
import {ITextInput} from './type';

const index = (props: ITextInput) => {
  const {Colors} = useTheme();

  const {
    containerStyle,
    styleInput,
    iconRight,
    iconRightStyle,
    iconLeft,
    iconLeftStyle,
    errStr,
    placeholder,
    placeholderTextColor,
    maxLenght,
    value = '',
    secureTextEntry,
    onChangeText,
    disabled,
  } = props;

  const styleTextInputContainer = StyleSheet.flatten([
    {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: errStr ? Colors.err : Colors.gray,
      backgroundColor: Colors.white,
      flexDirection: 'row',
      padding: 10,
      margin: 10,
      alignItems: 'center',
    },
  ]) as ViewStyle;

  const styleTextInput = StyleSheet.flatten([
    {marginHorizontal: 10, flex: 1, height: 30},
  ]);

  const _renderIcon = (isRight: boolean) => {
    return (
      <Block style={isRight ? iconRightStyle : iconLeftStyle}>
        {isRight ? iconRight : iconLeft}
      </Block>
    );
  };

  const [isShowPassword, setIsShowPassword] = React.useState(
    secureTextEntry ? true : false,
  );

  const _renderIconPass = () => {
    return (
      <Button
        type="clear"
        onPress={() => {
          setIsShowPassword(!isShowPassword);
        }}>
        {isShowPassword ? <IconInvisible /> : <IconVisibility />}
      </Button>
    );
  };

  return (
    <Block width={Iwidth}>
      <Block style={[styleTextInputContainer, containerStyle]}>
        {iconLeft && _renderIcon(false)}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styleTextInput, styleInput]}
          autoCapitalize="none"
          allowFontScaling={false}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          editable={!disabled}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          maxLength={maxLenght}
          secureTextEntry={isShowPassword}
        />

        {iconRight && !secureTextEntry ? _renderIcon(true) : _renderIconPass()}
      </Block>
      <Block marginH={10}>
        <Text>{errStr}</Text>
      </Block>
    </Block>
  );
};

export default memo(index);
