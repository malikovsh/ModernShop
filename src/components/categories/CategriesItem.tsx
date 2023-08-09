import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { AllCatigoryRespnseType, CatigoriesType } from '../../api/requestType'
import { mediaUrl } from '../../api/api'
import useRootStore from '../../hooks/useRootStore'

type Props = {
    data: AllCatigoryRespnseType,
    onPress: () => void,
    title?: string,
    image?: any
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 115 : 110
export const CATALOG_IMAGE_HEIGHT = Platform.OS === 'ios' ? 125 : 115

const CategriesItem = ({ onPress, data }: Props) => {

    const handlePress = () => {
        onPress && onPress()
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={{
                width: "100%", height: CATALOG_IMAGE_HEIGHT
            }}>
                <Image style={styles.img} source={require('./../../assets/Images/imgBg.png')} />
            </View>
            <View style={{
                width: "100%",
                height: 40,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={styles.text}>{data?.name}</Text>
            </View>
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
        height: 180,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.titlecolor,
    },
    img: {
        width: "100%",
        height: CATALOG_IMAGE_HEIGHT,
        borderRadius: 10,
        resizeMode: 'cover',
        alignSelf: 'center'
    }
})