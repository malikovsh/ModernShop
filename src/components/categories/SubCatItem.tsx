import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { CatigoriesType } from '../../api/requestType'
import { mediaUrl } from '../../api/api'
import { observer } from 'mobx-react-lite'

type Props = {
    data: CatigoriesType,
    onPress: () => void,
    title?: string,
    image?: any
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 115 : 110
export const CATALOG_IMAGE_HEIGHT = Platform.OS === 'ios' ? 110 : 100

const SubCatigory = ({ onPress, data }: Props) => {

    const handlePress = () => {
        onPress && onPress()
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image style={styles.img} source={{ uri: mediaUrl + data?.name }} />
            <Text style={styles.text}>{data?.name}</Text>
        </TouchableOpacity>
    )
}

export default observer(SubCatigory)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 20,
        gap: 10,
        width: CATALOG_CARD_WIDTH,
        marginTop: 13,
        height: "auto"
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