import { Keyboard, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../screens/auth';
import Button from '../button/Button';
import { ConfirmIcon } from '../../assets/icons/icons';

type OrderProps = {
    visible: boolean,
    onClose: () => void,
}

const OrderModal = ({ visible, onClose }: OrderProps) => {

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
                        <View style={styles.modalItem}>
                            <ConfirmIcon />
                            <Text style={styles.title}>Заявка принята</Text>
                            <Text style={styles.text}>В ближайшее время мы с вами
                                свяжемся</Text>
                        </View>
                        <Button text='Принять' onPress={() => { navigation.navigate, onClose() }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default OrderModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.modalBgColor,
    },
    modal: {
        paddingHorizontal: 20,
        width: '90%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 20,
        zIndex: 1000,
        paddingTop: 20,
        paddingBottom: 30
    },
    modalItem: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 50,
        gap: 14,
        paddingTop: 15,
        paddingBottom: 30
    },
    title: {
        fontWeight: '700',
        fontSize: 21
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.titlecolor,
        textAlign: 'center',
    }
})