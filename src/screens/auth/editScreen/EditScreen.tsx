import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Button from '../../../components/button/Button'
import EditProfileText from '../../../components/uikit/EditePtofileTextInput'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import { StackNavigationType } from '../AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { PersonalData } from '../../../store/personalDataStore/personalDataStore.types'
import { observer } from 'mobx-react-lite'


const EditScreen = () => {
    const { updateState, state, updateUser } = useRootStore().personalData;
    const navigation = useNavigation<StackNavigationType>()

    const goBack = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const changeInput = (key: keyof PersonalData, value: string) => {
        updateState(key, value)
    }

    const onSave = useCallback(() => {
        updateUser(() => goBack())
    }, [updateState, state, goBack])


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ gap: 15 }}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <TitleNavbar title='Редактировать' showArrow onPress={() => navigation.goBack()} />
                    </View>
                    <EditProfileText value={state.fullName} onChangetext={value => changeInput("fullName", value)} title='Имя' text='Ваше имя' />
                    <EditProfileText value={state.phoneNumber} onChangetext={value => changeInput("phoneNumber", value)} title='Номер телефона' text='+998 99 999 99 99' />
                    {/* <View style={styles.itemBox}>
                        <Text style={{ fontSize: 16, color: COLORS.titlecolor }}>Пароль</Text>
                        <View style={styles.name}>
                            <Text >*****</Text>
                        </View>
                    </View> */}
                </View>
                <Button text='Сохранить' onPress={onSave} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default observer(EditScreen)

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