import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { MediaIcon, SendIcon } from '../../../assets/icons/icons'
import ChatComponentItem from '../../../components/chatComponent/ChatComponentItem'

const WritingScreen = () => {

    const navigation = useNavigation()

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.bgColor }}>
            <View style={styles.container}>
                <TitleNavbar title='Чат' showArrow onPress={() => navigation.goBack()} />
                <ScrollView
                    style={{ flex: 1, backgroundColor: COLORS.bgColor }}
                    showsVerticalScrollIndicator={false}>
                    <ChatComponentItem />
                </ScrollView>
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
                        <TextInput style={styles.inputText} placeholder='Написать сообщение...' />
                    </View>
                    <TouchableOpacity style={styles.send}>
                        <SendIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default WritingScreen

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