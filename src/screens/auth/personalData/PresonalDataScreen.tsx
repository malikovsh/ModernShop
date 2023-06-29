import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../AuthStack'
import Button from '../../../components/button/Button'
import ModalComponent from '../../../components/Modal/ModalComponent'

const PresonalDataScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const [open, setOpen] = useState(false)

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
                        <Text >Рафаэль</Text>
                    </View>
                </View>
                <View style={styles.itemBox}>
                    <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Фамилия</Text>
                    <View style={styles.name}>
                        <Text >Ройтман</Text>
                    </View>
                </View>
                <View style={styles.itemBox}>
                    <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Номер телефона</Text>
                    <View style={styles.name}>
                        <Text >+998 99 999 99 99</Text>
                    </View>
                </View>
                <View style={styles.itemBox}>
                    <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Пароль</Text>
                    <View style={styles.name}>
                        <Text >*****</Text>
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
            <ModalComponent visible={open} onClose={() => setOpen(false)} onPress={onPress} />
        </View>
    )
}

export default PresonalDataScreen

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
        paddingVertical: 13,
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