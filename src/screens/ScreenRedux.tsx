import React from 'react';
// import {RootState} from '../redux/configureStore.dev';
import {StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from './../redux/hook/hooks';
// import {
//   CounterState,
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementSaga,
//   selectCount,
// } from './../redux/duck/Count/counterSlice';
import IconRiot from '../assets/Icons/IconRiot';
import {Block, Button, Input} from '../common';
import {useTheme} from '../themes';
interface Props {}

const ScreenRedux = (props: Props) => {
  const {} = props;
  const {Colors} = useTheme();
  // const cdount = useAppSelector(state => state?.counter?.value);
  // const title = useAppSelector(state => state?.counter?.title);
  const [incrementAmount, setIncrementAmount] = React.useState('');
  // const incrementValue = Number(incrementAmount) || 0;

  // const dispatch = useAppDispatch();
  // const obj = {
  //   value: Number(11),
  //   title: 'Tuyen',
  // };
  return (
    <Block flex={1} align="center" justify="center" color={Colors.white}>
      <Input
        value={incrementAmount}
        onChangeText={(e: string) => {
          setIncrementAmount(e);
        }}
        secureTextEntry
        iconLeft={<IconRiot />}
        placeholder="nhập thông tin"
        errStr="có lỗi"
      />
    </Block>
  );
};

export default ScreenRedux;
