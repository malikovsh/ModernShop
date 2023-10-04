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
    const params = useRoute().params;




    const { createPassword, setCreatePasswordPayload, isLoading, createPasswordPayload } = useRootStore().loginStore

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
                        title='Новый пароль'
                        onChange={(e) => setCreatePasswordPayload('password', e)}
                        value={createPasswordPayload.password} />
                    <InputText
                        title='Подтвердите парольu'
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