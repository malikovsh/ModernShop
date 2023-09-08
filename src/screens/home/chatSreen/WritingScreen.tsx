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


const WritingScreen = () => {

    const navigation = useNavigation()
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200

    const [changeText, setChangeText] = useState('')
    const [saveText, setSaveText] = useState([{
        id: 0,
        text: 'bla bla',
        date: ''
    }])

    const date = new Date()

    const dateFormat = (date: Date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hours = date.getHours()
        const minutes = date.getMinutes()

        return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    }

    const handleSetText = (text: any) => {
        setChangeText(text)
    }
    const handleSaveText = () => {
        if (changeText !== '   ') {
            setSaveText([
                ...saveText,
                {
                    id: 1,
                    text: changeText,
                    date: dateFormat(date)
                }
            ])
            setChangeText('')
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.bgColor }}>
            <View style={styles.container}>
                <TitleNavbar title='Чат' showArrow onPress={() => navigation.goBack()} />
                <FlatList
                    data={saveText}
                    renderItem={({ item }) => <ChatComponentItem text={item.text} date={item.date} />}
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
                        <TextInput style={styles.inputText} value={changeText} onChangeText={handleSetText} placeholder='Написать сообщение...' />
                    </View>
                    <TouchableOpacity style={styles.send} onPress={handleSaveText} >
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