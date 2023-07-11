import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type ButtonProps = {
    title: string,
    onSelectColor: () => void,
    selectColor: boolean
}


const ButtonNavBar = ({ title, onSelectColor, selectColor }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.container,
        { backgroundColor: selectColor ? COLORS.btnColor : COLORS.white }]}
            onPress={onSelectColor}>
            <Text style={[styles.title, { color: selectColor ? COLORS.white : COLORS.titlecolor }]}>{title}</Text>
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