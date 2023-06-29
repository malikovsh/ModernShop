import { Keyboard, Modal, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../button/Button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../screens/auth/AuthStack'
import { AntDesign } from '@expo/vector-icons';

type ModalProps = {
    visible: boolean,
    onClose: () => void,
    onPress: () => void,
}

const ModalComponent = ({ visible, onClose, onPress }: ModalProps) => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.modal}>
                        <View style={{ width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <Pressable onPress={() => onClose()}>
                                <AntDesign name="close" size={24} color={COLORS.titlecolor} />
                            </Pressable>
                        </View>
                        <Text style={styles.title}>Введите код отправленный на ваш телефон</Text>
                        <View style={styles.inputBox}>
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 16,
                                color: COLORS.titlecolor
                            }}>
                                Код
                            </Text>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <Button text='Подтвердить' onPress={() => { onPress(), onClose() }} />
                        <TouchableOpacity style={{ marginTop: 20 }}>
                            <Text style={styles.smsTime}>Запросить еще раз (0:50)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.modalBgColor
    },
    modal: {
        padding: 20,
        width: '90%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 20,
        zIndex: 1000
    },
    title: {
        fontWeight: '700',
        fontSize: 21,
        color: COLORS.black,
        textAlign: 'center'
    },
    inputBox: {
        marginVertical: 25,
        width: "90%",
        paddingVertical: 5,
        padding: 20,
    },
    input: {
        fontWeight: "500",
        fontSize: 20,
        borderBottomWidth: 1,
        paddingTop: 20,
        color: COLORS.titlecolor
    },
    smsTime: {
        fontWeight: "700",
        fontSize: 17,
        color: COLORS.titlecolor
    }
})