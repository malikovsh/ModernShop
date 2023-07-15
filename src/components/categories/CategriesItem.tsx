import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { AllCatigoryRespnseType, CatigoriesType } from '../../api/requestType'
import { mediaUrl } from '../../api/api'

type Props = {
    data: AllCatigoryRespnseType,
    onPress: () => void,
    title?: string,
    image?: any
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 130 : 120
export const CATALOG_IMAGE_HEIGHT = Platform.OS === 'ios' ? 120 : 110

const CategriesItem = ({ onPress, title, data }: Props) => {

    console.log('item', data);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={{ uri: mediaUrl + data.icon?.name }} />
            <Text style={styles.text}>{data?.name}</Text>
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
        marginTop: 13,
        height: "auto",
        padding: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.titlecolor
    },
    img: {
        width: "100%",
        height: CATALOG_IMAGE_HEIGHT,
        borderRadius: 10,
        resizeMode: 'cover',
        alignSelf: 'center'
    }
})