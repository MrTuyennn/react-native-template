import { StyleProp, TextStyle } from "react-native";

export interface IText extends TextStyle {
    children?: React.ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    p?: boolean;
    size?: TextStyle['fontSize'];
    weight?: TextStyle['fontWeight'];
    align?: TextStyle['textAlign'];
    style?: StyleProp<TextStyle>
}