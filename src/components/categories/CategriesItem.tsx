import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { AllCatigoryRespnseType, CatigoriesType } from '../../api/requestType'
import { mediaUrl } from '../../api/api'
import useRootStore from '../../hooks/useRootStore'
import { FastImageWithLoader } from '../FastImageWithLoader/FastImageWithLoader'

type Props = {
    data: AllCatigoryRespnseType,
    onPress: () => void,
    title?: string,
    image?: any
}

// export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 115 : 110
// export const CATALOG_IMAGE_HEIGHT = Platform.OS === 'ios' ? 115 : 110

const CategriesItem = ({ onPress, data }: Props) => {

    const handlePress = () => {
        onPress && onPress()
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={handlePress}>
            <FastImageWithLoader style={styles.img} source={{
                uri: mediaUrl + data.icon?.name
            }}>
                <View style={{
                    width: "100%",
                    alignItems: 'center',
                    justifyContent: "center"
                }}>
                    <Text style={styles.text}>{data?.name}</Text>
                </View>
            </FastImageWithLoader>
        </TouchableOpacity>
    )
}

export default CategriesItem

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 10,
        gap: 10,
        width: 115,
        height: 125,
        marginTop: 13,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.white,
        alignSelf: "center",
        paddingBottom: 5,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1.5,
        shadowRadius: 3
    },
    img: {
        width: "100%",
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
        alignSelf: 'center',
        justifyContent: "flex-end"
    }
})