import { FlexStyle, StyleProp, ViewProps, ViewStyle } from "react-native";

export interface IBlock extends ViewProps {
    children?: React.ReactNode;

    height?: ViewStyle['height'];
    width?: ViewStyle['width'];

    flex?: ViewStyle['flex'];
    alignSelf?: FlexStyle['alignSelf'];
    row?: boolean;
    color?: ViewStyle['backgroundColor'];
    align?: ViewStyle['alignItems'];
    justify?: ViewStyle['justifyContent'];

    margin?: ViewStyle['margin']
    marginT?: ViewStyle['marginTop'];
    marginB?: ViewStyle['marginBottom'];
    marginL?: ViewStyle['marginLeft'];
    marginR?: ViewStyle['marginRight'];
    marginV?: ViewStyle['marginVertical'];
    marginH?: ViewStyle['marginHorizontal'];

    padding?: ViewStyle['padding']
    paddingT?: ViewStyle['paddingTop'];
    paddingB?: ViewStyle['paddingBottom'];
    paddingL?: ViewStyle['paddingLeft'];
    paddingR?: ViewStyle['paddingRight'];
    paddingH?: ViewStyle['paddingHorizontal'];
    paddingV?: ViewStyle['paddingVertical'];

    border?: ViewStyle['borderRadius'];
    borderColor?: ViewStyle['borderColor'];
    borderWidth?: ViewStyle['borderWidth'];

    pos?: ViewStyle['position'];
    top?: ViewStyle['top'];
    bot?: ViewStyle['bottom'];
    right?: ViewStyle['right'];
    left?: ViewStyle['left'];

    overflow?: ViewStyle['overflow'];

    shadow?: boolean;

    style?: StyleProp<ViewStyle>
}