import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputText from '../../../components/uikit/InputText'
import { TelephoneIcon } from '../../../assets/icons/icons'
import SignUpTemplate from '../../../components/template/SignUpTemplate'
import { COLORS } from '../../../constants/Color'
import Button from '../../../components/button/Button'
import ModalComponent from '../../../components/Modal/ModalComponent'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../AuthStack'

const WIDTH = Dimensions.get('window').width

const RegisterScreen = () => {

    const navigation = useNavigation<StackNavigationType>();
    const [open, setOpen] = useState(false)

    const onPress = () => {
        navigation.navigate('NewPassword')
    }


    return (
        <View style={{ flex: 1 }}>
            <SignUpTemplate title='Регистрация'>
                <View>
                    <InputText icon={<TelephoneIcon />} text='Номер' title='Номер телефона' />
                </View>
                <View style={styles.btnBox}>
                    <Button text='Запросить код' onPress={() => setOpen(true)} />
                    <TouchableOpacity onPress={() => navigation.navigate('Lecince')}>
                        <Text style={styles.registarBtn}>Уже есть аккаунт?</Text>
                    </TouchableOpacity>
                </View>
            </SignUpTemplate >
            <ModalComponent visible={open} onClose={() => setOpen(false)} onPress={() => navigation.navigate('CreatePassword')} />
        </View >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    btnBox: {
        width: "100%",
        gap: 20,
        alignItems: 'center',
        backgroundColor: COLORS.bgColor
    },
    registarBtn: {
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.titlecolor,
    }
})