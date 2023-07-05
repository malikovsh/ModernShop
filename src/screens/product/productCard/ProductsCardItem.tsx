import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'

type Props = {
    imageUrl: any
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 122 : 110

const ProductsCardItem = ({ imageUrl }: Props) => {
    return (
        <View style={styles.container}>
            <Image source={imageUrl} />
        </View>
    )
}

export default ProductsCardItem

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
        borderRadius: 10,
        width: CATALOG_CARD_WIDTH,
        height: 125,
        marginTop: 13,
    }
})