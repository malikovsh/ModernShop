import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type Props = {
    onPress: () => void,
    title: string,
    item?: any,
    image: any
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 122 : 110

const CategriesItem = ({ onPress, title, item, image }: Props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={{ width: '80%', height: 100 }} source={{ uri: image }} />
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
        height: 145,
        marginTop: 13,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.titlecolor
    }
})