import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ModalComponent from '../../../components/Modal/ModalComponent'
import Button from '../../../components/button/Button'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import useRootStore from '../../../hooks/useRootStore'
import { StackNavigationType } from '../AuthStack'

const PresonalDataScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const [open, setOpen] = useState(false)
    const { state } = useRootStore().personalData;

    const onPress = () => {
        navigation.navigate('NewEdit')
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <TitleNavbar title='Личные данные' showArrow onPress={() => navigation.navigate('BottomTab')} />
                <View style={styles.itemBox}>
                    <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Имя</Text>
                    <View style={styles.name}>
                        <Text >{state.name}</Text>
                    </View>
                </View>
                <View style={styles.itemBox}>
                    <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Фамилия</Text>
                    <View style={styles.name}>
                        <Text >{state.surname}</Text>
                    </View>
                </View>
                <View style={styles.itemBox}>
                    <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Номер телефона</Text>
                    <View style={styles.name}>
                        <Text >{state.phone}</Text>
                    </View>
                </View>
                <View style={styles.itemBox}>
                    <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Пароль</Text>
                    <View style={styles.name}>
                        <Text >{state.password}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btnBox} onPress={() => setOpen(true)}>
                    <Text
                        style={{ fontWeight: '700', fontSize: 16, color: COLORS.btnColor }}
                    >
                        Изменить пароль
                    </Text>
                </TouchableOpacity>
                <Button text='Редактировать' onPress={() => navigation.navigate('Edit')} />
            </View>
            <ModalComponent onChange={() => navigation.navigate} visible={open} onClose={() => setOpen(false)} onPress={onPress} />
        </View>
    )
}

export default observer(PresonalDataScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        justifyContent: "space-between"
    },
    itemBox: {
        width: '100%',
        gap: 10,
        paddingTop: 20
    },
    name: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 21,
        backgroundColor: COLORS.btnBgColor,
        borderRadius: 50,
    },
    btn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingBottom: 40
    },
    btnBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: COLORS.btnColor,
        borderRadius: 30,
    }
})