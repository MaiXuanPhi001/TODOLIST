import { View, Text, ScrollView } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
    title?: string;
    back?: boolean;
    right?: ReactNode;
    children: ReactNode;
}

const Container = (props: Props) => {
    const { title, back, right, children } = props;

    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}

export default Container