import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { MediaIcon, SendIcon } from '../../../assets/icons/icons'
import ChatComponentItem from '../../../components/chatComponent/ChatComponentItem'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'


const WritingScreen = () => {

    const navigation = useNavigation()
    const flatList = React.useRef<FlatList>();
    const { setMessageText, messageText, onSendMessage, messages, chatId, exitChat } = useRootStore().chatStore
    const { userInfo } = useRootStore().personalData
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200


    function handleScrollToEnd(width: any, height: any) {
        if (flatList.current) {
            flatList.current.scrollToOffset({ offset: height });
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.bgColor }}>
            <View style={styles.container}>
                <TitleNavbar title='Чат' showArrow onPress={() => { navigation.goBack(); exitChat() }} />
                <FlatList
                    ref={flatList as any}
                    onContentSizeChange={handleScrollToEnd}
                    data={messages[chatId]}
                    renderItem={({ item }) => <ChatComponentItem text={item.message} date={item.createdAt} position={item.sender === userInfo.id} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
                {/* <ChatComponentItem text={saveText} date={''} /> */}
                <View style={styles.input}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 17,
                        paddingLeft: 14
                    }}>
                        <TouchableOpacity style={styles.media}>
                            <MediaIcon />
                        </TouchableOpacity>
                        <TextInput style={styles.inputText} value={messageText} onChangeText={(e) => setMessageText(e)} placeholder='Написать сообщение...' />
                    </View>
                    <TouchableOpacity style={styles.send} onPress={onSendMessage} >
                        <SendIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default observer(WritingScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        justifyContent: "space-between",
        paddingBottom: 30
    },
    input: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20,
        width: "100%"
    },
    media: {

    },
    inputText: {
        paddingVertical: 17,
        fontSize: 15,
        fontWeight: '500',
        width: "80%",
    },
    send: {
        padding: 15,
        backgroundColor: COLORS.btnColor,
        borderRadius: 20
    }
});