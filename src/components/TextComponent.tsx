import React from 'react';
import { Text } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    text: string;
    size?: number;
    font?: string;
    color?: string;
    flex?: number;
}

const TextComponent = (props: Props) => {
    const { text, font, size, color, flex } = props

    return (
        <Text
            style={[
                globalStyles.text,
                {
                    flex: flex ?? 1,
                    fontFamily: font ?? fontFamilies.regular,
                    fontSize: size ?? 14,
                    color: color ?? colors.desc,
                }
            ]}>
            {text}
        </Text>
    )
}

export default TextComponent