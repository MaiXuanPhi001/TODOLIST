import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import SectionComponent from '../components/SectionComponent'
import RowComponent from '../components/RowComponent'
import TextComponent from '../components/TextComponent'
import { globalStyles } from '../styles/globalStyles'
import CardComponent from '../components/CardComponent'
import TitleComponent from '../components/TitleComponent'
import { Edit2, Element4, Notification, SearchNormal1 } from 'iconsax-react-native'
import { colors } from '../constants/colors'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TagComponent from '../components/TagComponent'
import SpaceComponent from '../components/SpaceComponent'
import CicularComponent from '../components/CicularComponent'
import CardImageComponent from '../components/CardImageComponent'
import AvatarGroup from '../components/AvatarGroup'

const HomeScreen = () => {
    return (
        <Container>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <Element4 size={24} color={colors.desc} />
                    <Notification size={24} color={colors.desc} />
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
                    <TextComponent color={'#696B6F'} text='Search task' />
                    <SearchNormal1 size={20} color={colors.desc} />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <CardComponent>
                    <RowComponent>
                        <View style={{ flex: 1 }}>
                            <TitleComponent text='Task progress' />
                            <TextComponent text='30/40 task done' />
                            <SpaceComponent height={12} />
                            <RowComponent justify='flex-start'>
                                <TagComponent
                                    text='Match 22'
                                    onPress={() => console.log('Say hii')}
                                />
                            </RowComponent>
                        </View>
                        <View>
                            <CicularComponent value={80} />
                        </View>
                    </RowComponent>
                </CardComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent styles={{ alignItems: 'flex-start' }}>
                    <View style={{ flex: 1 }}>
                        <CardImageComponent>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={globalStyles.iconContainer}>
                                <Edit2 size={20} color={colors.white} />
                            </TouchableOpacity>
                            <TitleComponent text={'UX Design'} />
                            <TextComponent text={'Task managements mobile app'} size={13} />

                            <View style={{ marginVertical: 28 }}>
                                <AvatarGroup />
                            </View>
                            <TextComponent
                                text='Due, 2023 Match 03'
                                size={12}
                                color={colors.desc}
                            />
                        </CardImageComponent>
                    </View>
                    <SpaceComponent width={16} />
                    <View style={{ flex: 1, backgroundColor: 'coral' }}>
                        <CardImageComponent color='rgba(33, 150, 243, 0.93)'>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={globalStyles.iconContainer}>
                                <Edit2 size={20} color={colors.white} />
                            </TouchableOpacity>
                            <TitleComponent text={'API Payment'} size={18} />
                        </CardImageComponent>
                        <SpaceComponent height={16} />
                        <CardImageComponent color='rgba(18, 181, 22, 0.9)'>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={globalStyles.iconContainer}>
                                <Edit2 size={20} color={colors.white} />
                            </TouchableOpacity>
                            <TitleComponent text={'Update work'} />
                            <TextComponent text={'Revision home page'} size={13} />
                        </CardImageComponent>
                    </View>
                </RowComponent>
            </SectionComponent>
        </Container>
    )
}

export default HomeScreen