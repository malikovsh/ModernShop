import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import ChatBox from '../../../components/uikit/ChatBox'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../HomeStack'

const DATA = [
    1, 2, 3, 4, 5, 6
]

const ChatScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Поставщики' />

            <FlatList
                data={DATA}
                renderItem={({ item }) => <ChatBox
                    user='Рафаэль Ройтман'
                    message='Текст сообщения...'
                    onPress={() => navigation.navigate('Writing')} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 8,
                    paddingBottom: 30
                }}
            />
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }
})