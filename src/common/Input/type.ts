import { StyleProp, TextInputProps, ViewStyle } from "react-native";


export interface ITextInput extends TextInputProps {
    containerStyle?: StyleProp<ViewStyle>;
    styleInput?: StyleProp<ViewStyle>;
    iconRight?: React.ReactNode;
    iconRightStyle?: StyleProp<ViewStyle>;
    iconLeft?: React.ReactNode;
    iconLeftStyle?: StyleProp<ViewStyle>;

    errStr?: string
    placeholder?: string;
    placeholderTextColor?: string;
    maxLenght?: number
    value?: any
    secureTextEntry?: boolean;
    onChangeText?: ((text: string) => void) | undefined;
    disabled?: boolean
}