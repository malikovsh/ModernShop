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
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import axios from 'axios'

const WIDTH = Dimensions.get('window').width

const RegisterScreen = () => {

    const navigation = useNavigation<StackNavigationType>();
    const [open, setOpen] = useState(false)
    const {
        registar,
        setRegistarPayload,
        registarPayload,
        isLoading,
        registarResponse,
        verefication,
        setVereficationPayload,
        vereficationPayload,
        time
    } = useRootStore().loginStore

    const handleRegistar = async () => {
        registar(() => setOpen(true))

    };

    return (
        <View style={{ flex: 1 }}>
            <SignUpTemplate title='Регистрация'>
                <View>
                    <InputText
                        keyboardType='phone-pad'
                        icon={<TelephoneIcon />}
                        text='Номер'
                        title='Номер телефона'
                        onChange={(e) => setRegistarPayload('phoneNumber', e)}
                        value={registarPayload.phoneNumber} />
                </View>
                <View style={styles.btnBox}>
                    <Button
                        isLoading={isLoading}
                        text='Запросить код'
                        onPress={handleRegistar} />
                    <TouchableOpacity onPress={() => navigation.navigate('Lecince')}>
                        <Text style={styles.registarBtn}>Уже есть аккаунт?</Text>
                    </TouchableOpacity>
                </View>
            </SignUpTemplate >
            <ModalComponent
                time={time}
                onChange={(e) => setVereficationPayload('code', e)}
                value={vereficationPayload?.code}
                visible={open}
                onClose={() => setOpen(false)}
                onPress={() => verefication(() => { setOpen(false), navigation.navigate('CreatePassword') })} />
        </View >
    )
}

export default observer(RegisterScreen)

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