import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SignUpTemplate from '../../../components/template/SignUpTemplate'
import InputText from '../../../components/uikit/InputText'
import { TelephoneIcon } from '../../../assets/icons/icons'
import Button from '../../../components/button/Button'
import { COLORS } from '../../../constants/Color'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../AuthStack'
import ModalComponent from '../../../components/Modal/ModalComponent'
import { observer } from 'mobx-react-lite'
import useRootStore from '../../../hooks/useRootStore'

const WIDTH = Dimensions.get('window').width

const RestoreScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const [open, setOpen] = useState(false)

    const {
        registar,
        setRegistarPayload,
        registarPayload,
        isLoading,
        verefication,
        setVereficationPayload,
        vereficationPayload,
        time
    } = useRootStore().loginStore

    const onPress = async () => {
        registar(() => setOpen(true))
    };

    return (

        <SignUpTemplate title='Восстановление'>
            <InputText
                keyboardType='phone-pad'
                onChange={(e) => setRegistarPayload('phoneNumber', e)}
                icon={<TelephoneIcon />}
                title='Номер телефона'
                text='Номер' />
            <View style={styles.btnBox}>
                <ModalComponent
                    visible={open}
                    onClose={() => setOpen(false)}
                    value={vereficationPayload?.code}
                    onPress={() => verefication({ setOpen, navigation })}
                    time={time}
                    onChange={(e) => setVereficationPayload('code', e)}
                />
                <Button
                    isLoading={isLoading}
                    text='Запросить код'
                    onPress={onPress}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Lecince')}>
                    <Text style={styles.registarBtn}>Уже есть аккаунт?</Text>
                </TouchableOpacity>
            </View>
        </SignUpTemplate>
    )
}
export default observer(RestoreScreen)

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