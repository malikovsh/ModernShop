import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { FavoriteIcon } from '../../assets/icons/icons'

type NewProductsProps = {
    productName: string;
    category: string;
    productPrice: string,
    showFamouse?: boolean;
    onPress?: () => void;
    isFocus?: boolean;
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 184 : 164

const NewProductsItem = ({ productName, category, productPrice, showFamouse, onPress, isFocus }: NewProductsProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <TouchableOpacity style={styles.favriteBtn}>
                <FavoriteIcon isFocus={isFocus} />
            </TouchableOpacity>
            <Image source={require('./../../assets/Images/phone2.png')} />
            <View>
                <Text style={styles.productName}>{productName}</Text>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.productPrice}>{productPrice}</Text>
            </View>
            {
                showFamouse ?
                    <View style={styles.famouse}>
                        <Text style={{ fontWeight: '700', fontSize: 14, color: COLORS.white }}>Популярное</Text>
                    </View> : null
            }
        </TouchableOpacity>
    )
}

export default NewProductsItem

const styles = StyleSheet.create({
    container: {
        width: CATALOG_CARD_WIDTH,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: COLORS.white,
        marginTop: 20
    },
    productName: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.black,
        paddingTop: 10,
    },
    category: {
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.titlecolor,
        paddingTop: 3,
    },
    productPrice: {
        fontWeight: '700',
        fontSize: 17,
        color: COLORS.btnColor,
        lineHeight: 27
    },
    favriteBtn: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    famouse: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 30,
        backgroundColor: COLORS.famouseColor,
        top: '-5%',
        left: 0
    }
})