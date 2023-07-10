import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../AuthStack'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/button/Button'


const EditScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ gap: 15 }}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <TitleNavbar title='Редактировать' showArrow onPress={() => navigation.goBack()} />
                    </View>
                    <InputText title='Имя' text='Рафаэль' />
                    <InputText title='Фамилия' text='Ройтман' />
                    <InputText title='Номер телефона' text='+998 99 999 99 99' />
                    <View style={styles.itemBox}>
                        <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Пароль</Text>
                        <View style={styles.name}>
                            <Text >*****</Text>
                        </View>
                    </View>
                </View>
                <Button text='Сохранить' onPress={() => navigation.navigate('Personal')} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        justifyContent: "space-between",
        paddingBottom: 40
    },
    itemBox: {
        width: '100%',
        gap: 10,
        paddingHorizontal: 20
    },
    name: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 21,
        backgroundColor: COLORS.btnBgColor,
        borderRadius: 50,
    }
})