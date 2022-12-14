import { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface IBlock extends ViewProps {
    children?: React.ReactNode;
    flex?: ViewStyle['flex'];
    row?: ViewStyle['flexDirection'];
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
    style?: StyleProp<ViewStyle>
}