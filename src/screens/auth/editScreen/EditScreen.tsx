import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '..'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/button/Button'


const EditScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ gap: 15 }}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <TitleNavbar title='Редактировать' showArrow />
                    </View>
                    <InputText title='Имя' />
                    <InputText title='Фамилия' />
                    <InputText title='Номер телефона' />
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
    }
})