import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/button/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS } from '../../../constants/Color'
import { observer } from 'mobx-react-lite'
import useRootStore from '../../../hooks/useRootStore'

const NewEditPassword = () => {

    const navigation = useNavigation()
    const params = useRoute().params;


    const { createPassword, setCreatePasswordPayload, isLoading, createPasswordPayload } = useRootStore().loginStore


    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <TitleNavbar title='Изменить пароль' showArrow onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.inputBox}>
                    <InputText
                        title='Новый пароль'
                        onChange={(e) => setCreatePasswordPayload('password', e)}
                        value={createPasswordPayload.password} />
                    <InputText
                        title='Подтвердите пароль'
                        onChange={(e) => setCreatePasswordPayload('password', e)}
                        value={createPasswordPayload.password} />
                </View>
                <View style={styles.btnBox}>
                    <Button
                        isLoading={isLoading}
                        text='Сохранить'
                        onPress={() => createPassword({ ...params, navigation })}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default observer(NewEditPassword)

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