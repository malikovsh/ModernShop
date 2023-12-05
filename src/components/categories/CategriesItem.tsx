import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { AllCatigoryRespnseType, CatigoriesType } from '../../api/requestType'
import { mediaUrl } from '../../api/api'
import { FastImageWithLoader } from '../FastImageWithLoader/FastImageWithLoader'
import { observer } from 'mobx-react-lite'

type Props = {
    data: AllCatigoryRespnseType,
    onPress: () => void,
    title?: string,
    image?: any
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 115 : 100
export const CATALOG_IMAGE_HEIGHT = Platform.OS === 'ios' ? 120 : 110

const CategriesItem = ({ onPress, data }: Props) => {

    const handlePress = () => {
        onPress && onPress()
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={handlePress}>
            <ImageBackground style={styles.img} imageStyle={{ borderRadius: 10 }} source={{
                uri: mediaUrl + data.icon?.name
            }}>
                <View style={{
                    width: "100%",
                    alignItems: 'center',
                    justifyContent: "center"
                }}>
                    <Text style={styles.text}>{data?.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default observer(CategriesItem)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        gap: 10,
        width: CATALOG_CARD_WIDTH,
        height: CATALOG_IMAGE_HEIGHT,
        marginTop: 13,
    },
    img: {
        width: "100%",
        height: '100%',
        resizeMode: 'cover',
        justifyContent: "flex-end",
        scaleAspectFit: CATALOG_CARD_WIDTH,
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.white,
        alignSelf: "center",
        paddingBottom: 5,
        textShadowColor: COLORS.black,
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 5,
    },
})