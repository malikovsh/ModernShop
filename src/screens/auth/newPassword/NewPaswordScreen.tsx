import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import InputText from '../../../components/uikit/InputText';
import Button from '../../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '..';
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
                    <InputText title='Новый пароль' />
                    <InputText title='Подтвердите пароль' />
                </View>
                <View style={styles.btnBox}>
                    <Button text='Сохранить' onPress={() => navigation.navigate("BottomTab")} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default NewPaswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        colors: COLORS.bgColor
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