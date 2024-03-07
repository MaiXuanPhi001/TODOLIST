import { View, Text } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import SectionComponent from '../components/SectionComponent'
import RowComponent from '../components/RowComponent'
import TextComponent from '../components/TextComponent'
import { globalStyles } from '../styles/globalStyles'
import CardComponent from '../components/CardComponent'
import TitleComponent from '../components/TitleComponent'

const HomeScreen = () => {
    return (
        <Container>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <TextComponent text='dada' />
                    <TextComponent text='dada' />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <TextComponent text='Hi, Jason' />
                <TextComponent text='Be Productive today' />
            </SectionComponent>
            <SectionComponent>
                <RowComponent
                    styles={[globalStyles.inputContainer]}
                    onPress={() => console.log('say hi')}
                >
                    <TextComponent text='Search' />
                    <Text>S</Text>
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <CardComponent>
                    <RowComponent>
                        <View style={{flex: 1}}>
                            <TitleComponent text='Task progress' />
                            <TextComponent text='30/40 task done' />
                            <TextComponent text='Task' />
                        </View>
                        <View>
                            <TextComponent text='CircleChar' />
                        </View>
                    </RowComponent>
                </CardComponent>
            </SectionComponent>
        </Container>
    )
}

export default HomeScreen