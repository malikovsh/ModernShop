import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type Props = {
    title: string
}

const StorageBtn = ({ title }: Props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{title}</Text>
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
        borderColor: COLORS.titlecolor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.titlecolor
    }
})