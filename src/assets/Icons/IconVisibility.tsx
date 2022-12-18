import {ISvg} from '../../common/Svg/type';
import React, {memo} from 'react';
import {G, Path, Svg} from 'react-native-svg';
import {useTheme} from 'themes';

const IconVisibility = (props: ISvg) => {
  const {size, bg} = props;
  const {Colors} = useTheme();
  return (
    <Svg
      height={size || 20}
      width={size || 20}
      fill={bg || Colors.black}
      viewBox="0 0 469.333 469.333">
      <G>
        <G>
          <G>
            <Path d="M234.667,170.667c-35.307,0-64,28.693-64,64s28.693,64,64,64s64-28.693,64-64S269.973,170.667,234.667,170.667z" />
            <Path
              d="M234.667,74.667C128,74.667,36.907,141.013,0,234.667c36.907,93.653,128,160,234.667,160
				c106.773,0,197.76-66.347,234.667-160C432.427,141.013,341.44,74.667,234.667,74.667z M234.667,341.333
				c-58.88,0-106.667-47.787-106.667-106.667S175.787,128,234.667,128s106.667,47.787,106.667,106.667
				S293.547,341.333,234.667,341.333z"
            />
          </G>
        </G>
      </G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
    </Svg>
  );
};

export default memo(IconVisibility);
