import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../AuthStack'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/button/Button'
import { COLORS } from '../../../constants/Color'

const NewCreatePassword = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <TitleNavbar title='Создать новый пароль' showArrow onPress={() => navigation.navigate("SignUp")} />
                </View>
                <View style={styles.inputBox}>
                    <InputText title='Новый пароль' />
                    <InputText title='Подтвердите парольu' />
                </View>
                <View style={styles.btnBox}>
                    <Button text='Сохранить' onPress={() => navigation.navigate("Lecince")} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default NewCreatePassword

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