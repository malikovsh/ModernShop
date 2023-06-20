import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SignUpTemplate from '../../../components/template/SignUpTemplate'
import InputText from '../../../components/uikit/InputText'
import { TelephoneIcon } from '../../../assets/icons/icons'
import Button from '../../../components/button/Button'
import { COLORS } from '../../../constants/Color'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '..'
import ModalComponent from '../../../components/Modal/ModalComponent'

const WIDTH = Dimensions.get('window').width

const RestoreScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const [open, setOpen] = useState(false)

    return (

        <SignUpTemplate title='Восстановление'>
            <InputText icon={<TelephoneIcon />} title='Номер телефона' text='Номер' />
            <View style={styles.btnBox}>
                <ModalComponent visible={open} onClose={() => setOpen(false)} />
                <Button text='Запросить код' onPress={() => setOpen(true)} />
                <TouchableOpacity onPress={() => navigation.navigate('Lecince')}>
                    <Text style={styles.registarBtn}>Уже есть аккаунт?</Text>
                </TouchableOpacity>
            </View>
        </SignUpTemplate>
    )
}
export default RestoreScreen

const styles = StyleSheet.create({
    btnBox: {
        width: "100%",
        gap: 20,
        alignItems: 'center'
    },
    registarBtn: {
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.titlecolor,
    }
})