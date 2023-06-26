import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type ButtonProps = {
    title: string,
    onPress: () => void,
    item?: any
}

const ButtonNavBar = ({ title, onPress, item }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonNavBar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: COLORS.btnColor,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        color: COLORS.white,
    }
})