import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import InputText from '../../../components/uikit/InputText'
import { COLORS } from '../../../constants/Color'
import SignUpTemplate from '../../../components/template/SignUpTemplate'
import { LockIcon, TelephoneIcon } from '../../../assets/icons/icons'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const LicenceScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { login, setLoginPayload, loginPayload, isLoading } = useRootStore().loginStore

    return (
        <SignUpTemplate title='Авторизация'>
            <View>
                <View style={styles.inputBtn}>
                    <InputText icon={<TelephoneIcon />} title='Номер телефона' text='Номер' onChange={(e) => setLoginPayload('phoneNumber', e)} value={loginPayload.phoneNumber} />
                    <InputText icon={<LockIcon />} title='Пароль' text='Пароль' onChange={(e) => setLoginPayload('password', e)} value={loginPayload.password} />
                </View>
                <TouchableOpacity style={styles.forgottenBtn} onPress={() => navigation.navigate("Restore")}>
                    <Text style={styles.btnText}>Забыли пароль?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnBox}>
                <Button text='Войти' isLoading={isLoading} onPress={() => login()} />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.registarBtn}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        </SignUpTemplate>
    )
}

export default observer(LicenceScreen)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.bgColor
    },
    inputBtn: {
        gap: 15
    },
    forgottenBtn: {
        paddingTop: 10,
        width: 140,
        alignSelf: "flex-end",
    },
    btnText: {
        fontSize: 16,
        fontWeight: "400",
        color: COLORS.btnColor
    },
    btnBox: {
        width: "100%",
        gap: 20,
        alignItems: 'center',
    },
    registarBtn: {
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.titlecolor,
    }
})