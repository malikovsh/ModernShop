import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import { ProductType } from '../../../api/requestType';
import { mediaUrl } from '../../../api/api';

type Props = {
    data: {
        name: string;
        fileId: string;
    };

}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 122 : 110

const ProductsCardItem = ({ data }: Props) => {
    return (
        <View style={styles.container}>
            <Image style={{
                width: '100%',
                height: '100%',
                borderRadius: 10
            }} source={{ uri: mediaUrl + data.name }} />
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