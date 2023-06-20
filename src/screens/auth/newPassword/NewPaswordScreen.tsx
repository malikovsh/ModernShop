import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import InputText from '../../../components/uikit/InputText';
import Button from '../../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '..';

const NewPaswordScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.navigate("SignUp")}>
                        <AntDesign name="arrowleft" size={35} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Изменить пароль</Text>
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
    },
    navBar: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 22,
        gap: 24
    },
    arrowBtn: {

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