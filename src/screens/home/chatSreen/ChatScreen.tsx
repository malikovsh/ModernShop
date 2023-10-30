import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import ChatBox from '../../../components/uikit/ChatBox'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../HomeStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import LottieView from 'lottie-react-native';


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

    const EmptyListMessage = () => {

        const animation = useRef(null);

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    source={require('../../../assets/Animat.json')}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TitleNavbar title='Поставщики' />
            {
                chatUsers.length === 0 ?
                    <EmptyListMessage /> :
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
            }

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