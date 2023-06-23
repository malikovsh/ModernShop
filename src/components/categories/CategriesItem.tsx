import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type Props = {
    onPress: () => void,
    title: string,
}

const CategriesItem = ({ onPress, title }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={require('./../../assets/Images/phone.png')} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategriesItem

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 20,
        gap: 10,
        width: 115,
        height: 125,
        marginTop: 13
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.titlecolor
    }
})