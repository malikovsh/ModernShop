import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import ChatBox from '../../../components/uikit/ChatBox'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../HomeStack'

const ChatScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Поставщики' />
            <ChatBox user='Рафаэль Ройтман' message='Текст сообщения...' onPress={() => navigation.navigate('Writing')} />
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