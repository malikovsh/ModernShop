import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/Color'

type Props = {
    title: string
    selectColor: boolean
    onSelectColor: () => void
}

const StorageBtn = ({ title, onSelectColor, selectColor }: Props) => {

    return (
        <TouchableOpacity style={[styles.container, { borderColor: selectColor ? COLORS.btnColor : COLORS.titlecolor }]} onPress={onSelectColor}>
            <Text style={[styles.title, { color: selectColor ? COLORS.btnColor : COLORS.titlecolor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default StorageBtn

const styles = StyleSheet.create({
    container: {
        width: 100,
        paddingHorizontal: 21,
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    }
})