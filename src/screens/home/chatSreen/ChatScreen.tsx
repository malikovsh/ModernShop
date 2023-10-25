import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import ChatBox from '../../../components/uikit/ChatBox'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../HomeStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const DATA = [
    1, 2, 3, 4, 5, 6
]

const ChatScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { getChatUsers, chatUsers, openChat } = useRootStore().chatStore

    useEffect(() => {
        getChatUsers()
    }, [])

    const handleOpenChat = (e: any) => {
        openChat(e)
        navigation.navigate('Writing')
    }


    return (
        <View style={styles.container}>
            <TitleNavbar title='Поставщики' />

            <FlatList
                data={chatUsers}
                renderItem={({ item }) => <ChatBox
                    user={item.admin.email}
                    onPress={() => handleOpenChat(item)} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 8,
                    paddingBottom: 30
                }}
            />
        </View>
    )
}

export default observer(ChatScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }
})