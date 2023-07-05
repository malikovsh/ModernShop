import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COLORS } from '../../constants/Color'

type Props = {
    color: string,
    selectColor: boolean
    onSelectColor: () => void
}

const ColorBtn = ({ color, selectColor, onSelectColor }: Props) => {

    return (
        <TouchableOpacity style={[styles.container, { borderColor: color, borderWidth: selectColor ? 1 : 0 }]} onPress={onSelectColor}>
            <View style={[styles.ellipse, { backgroundColor: color }]}>

            </View>
        </TouchableOpacity>
    )
}

export default ColorBtn

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ellipse: {
        width: '90%',
        height: '90%',
        borderRadius: 30
    }
})