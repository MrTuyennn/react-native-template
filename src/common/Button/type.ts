import { IText } from './../Text/type';
import { ThemeColors } from './../../themes/types';
import { StyleProp, ViewStyle } from 'react-native';
import { IBlock } from '../Block/type'


export interface IButtonProps extends IBlock {
    type?: 'solid' | 'outline' | 'clear';
    onPress?: () => void | undefined | null;
    disabled?: boolean;
    loading?: boolean;
    title?: String;
    iconRight?: React.ReactNode;
    iconRightContainerStyle?: StyleProp<ViewStyle>;
    iconLeft?: React.ReactNode;
    iconLeftContainerStyle?: StyleProp<ViewStyle>;
    titleStyleProp?: IText
}

type IProps = {
    type?: 'solid' | 'outline' | 'clear';
    Colors?: ThemeColors;
    isDisabled?: Boolean;
    disabledbackground?: String;
}

export const getDefaultButtonStyles = ({
    type,
    Colors,
    isDisabled,
}: IProps) => {
    let buttonDefaultStyles: any = {
        borderRadius: 8,
    }
    if (type === 'solid') {
        buttonDefaultStyles.backgroundColor = Colors?.blueOpa
    }

    if (type === 'outline') {
        buttonDefaultStyles.backgroundColor = Colors?.blueOpa
        buttonDefaultStyles.borderWidth = 1,
        buttonDefaultStyles.borderColor = 'blue'
    }

    if (type === 'clear') {
        buttonDefaultStyles.backgroundColor = 'transparent'
    }

    return buttonDefaultStyles
} 