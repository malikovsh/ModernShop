import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type Props = {
    onPress: () => void,
    title: string,
    item?: any
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 122 : 110

const CategriesItem = ({ onPress, title, item }: Props) => {
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
        width: CATALOG_CARD_WIDTH,
        height: 125,
        marginTop: 13,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.titlecolor
    }
})