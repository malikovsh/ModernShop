import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputText from '../../../components/uikit/InputText';
import Button from '../../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../AuthStack';
import TitleNavbar from '../../../components/uikit/TitleNavbar';
import { COLORS } from '../../../constants/Color';

const NewPaswordScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <TitleNavbar title='Изменить пароль' showArrow onPress={() => navigation.navigate("SignUp")} />
                </View>
                <View style={styles.inputBox}>
                    <InputText title='Новый пароль' onChange={function (e: string): void {
                        throw new Error('Function not implemented.');
                    }} />
                    <InputText title='Подтвердите пароль' onChange={function (e: string): void {
                        throw new Error('Function not implemented.');
                    }} />
                </View>
                <View style={styles.btnBox}>
                    <Button text='Сохранить' onPress={() => navigation.navigate("Lecince")} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default NewPaswordScreen

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