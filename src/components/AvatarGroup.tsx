import { View, Text } from 'react-native'
import React from 'react'
import RowComponent from './RowComponent'
import TextComponent from './TextComponent'

const AvatarGroup = () => {
    return (
        <RowComponent styles={{ justifyContent: 'flex-start' }}>
            {Array.from({ length: 10 }).map(
                (item, index) =>
                    index < 6 && (
                        <View key={`image${index}`}>
                            <TextComponent text={'img'} />
                        </View>
                    )
            )}
            <View>
                <TextComponent text={'5+'} />
            </View>
        </RowComponent>
    )
}

export default AvatarGroup