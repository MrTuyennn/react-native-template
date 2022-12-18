import { ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

export interface ISvg extends SvgProps {
    size?: ViewStyle['height'];
    bg?: ViewStyle['backgroundColor'];
}