import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { MediaIcon, SendIcon } from '../../../assets/icons/icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const WritingSceen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Чат' showArrow onPress={() => navigation.goBack()} />
            <ScrollView
                style={{ flex: 1, backgroundColor: COLORS.bgColor }}
                showsVerticalScrollIndicator={false}>

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
    )
}

export default WritingSceen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        paddingBottom: 30
    },
    input: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20
    },
    media: {

    },
    inputText: {
        paddingVertical: 17,
        fontSize: 15,
        fontWeight: '500'
    },
    send: {
        padding: 15,
        backgroundColor: COLORS.btnColor,
        borderRadius: 20
    }
});