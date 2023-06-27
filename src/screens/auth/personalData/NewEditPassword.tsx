import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/Color'

const NewEditPassword = () => {

    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <TitleNavbar title='Изменить пароль' showArrow onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.inputBox}>
                    <InputText title='Новый пароль' />
                    <InputText title='Подтвердите пароль' />
                </View>
                <View style={styles.btnBox}>
                    <Button text='Сохранить' onPress={() => navigation.goBack()} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default NewEditPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor
    },
    title: {
        fontWeight: "700",
        fontSize: 20
    },
    inputBox: {
        marginTop: 25,
        gap: 15
    },
    btnBox: {
        width: "100%",
        position: "absolute",
        bottom: 40,
        alignItems: "center",
        justifyContent: "center",
    }
})