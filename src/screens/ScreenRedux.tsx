import React from 'react';
import {RootState} from '../redux/configureStore.dev';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from './../redux/hook/hooks';
import {
  CounterState,
  decrement,
  increment,
  incrementByAmount,
  incrementSaga,
  selectCount,
} from './../redux/duck/Count/counterSlice';
import {useTheme} from '../themes';
import {Block} from '../common';
interface Props {}

const ScreenRedux = (props: Props) => {
  const {Colors, Fonts} = useTheme();
  const count = useAppSelector(state => state?.counter?.value);
  const title = useAppSelector(state => state?.counter?.title);
  const [incrementAmount, setIncrementAmount] = React.useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  const dispatch = useAppDispatch();
  const obj = {
    value: Number(11),
    title: 'Tuyen',
  };
  return (
    <Block flex={1} align="center" justify="center" color="red">
      <Text>Tuyen</Text>
    </Block>
  );
};

export default ScreenRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
