import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationType } from '../AuthStack'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/button/Button'
import { COLORS } from '../../../constants/Color'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const NewCreatePassword = () => {

    const navigation = useNavigation<StackNavigationType>()
    const params: any = useRoute().params;

    const { createPassword, setCreatePasswordPayload, isLoading, createPasswordPayload } = useRootStore().loginStore

    const onPress = () => {
        if (createPasswordPayload.password === createPasswordPayload.conFigurePassword) {
            createPassword({ ...params, navigation })
        } else {
            alert('Неправильный пароль')
        }
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <TitleNavbar title='Создать новый пароль' showArrow onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.inputBox}>
                    <InputText
                        title='ФИО'
                        onChange={(e) => setCreatePasswordPayload('fullName', e)}
                        value={createPasswordPayload.fullName}
                    />
                    <InputText
                        title='Новый пароль'
                        onChange={(e) => setCreatePasswordPayload('password', e)}
                        value={createPasswordPayload.password}
                        showEye
                    />
                    <InputText
                        title='Подтвердите парольu'
                        onChange={(e) => setCreatePasswordPayload('conFigurePassword', e)}
                        value={createPasswordPayload.conFigurePassword}
                        showEye
                    />
                </View>
                <View style={styles.btnBox}>
                    <Button
                        isLoading={isLoading}
                        text='Сохранить'
                        onPress={() => onPress()}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default observer(NewCreatePassword)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor
    },
    title: {
        fontWeight: "700",
        fontSize: 20
    },
    inputBox: {
        marginTop: 25,
        gap: 15
    },
    btnBox: {
        width: "100%",
        position: "absolute",
        bottom: 40,
        alignItems: "center",
        justifyContent: "center",
    }
})