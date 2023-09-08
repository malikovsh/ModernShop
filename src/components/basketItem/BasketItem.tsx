import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { DeleteIcon } from '../../assets/icons/icons'
import CounterBox from '../uikit/CounterBox'
import { mediaUrl } from '../../api/api'
import useRootStore from '../../hooks/useRootStore'
import { inBasketProductType } from '../../store/basketStore/basketStore'

type BasketProps = {
    data: inBasketProductType;
    productName?: string;
    description?: string;
    productPrice?: string;
    onPress: () => void;
}

const BasketItem = ({ description, onPress, data }: BasketProps) => {

    const { deleteBasket } = useRootStore().basketStore

    return (
        <TouchableOpacity style={styles.container} >
            <View style={{ width: '25%' }}>
                <Image style={{
                    width: '100%',
                    height: 100,
                    borderRadius: 10
                }} source={{ uri: mediaUrl + data?.product.media[1]?.name }} />
            </View>
            <View style={{ width: "80%", }}>
                <Text style={styles.productName}>{data?.product.name}</Text>
                <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }} >
                    <View style={styles.color}>
                        <Text style={styles.colorTitle}>{data.color}</Text>
                    </View>
                    <Text style={[styles.colorName, {}]}>|</Text>
                    <Text style={styles.colorName}>{'Память: ' + data.store}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.productPrice}>{data?.product.price[0]?.price + 'сум'}</Text>
                    <CounterBox />
                </View>
            </View>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteBasket(data.product)}>
                <DeleteIcon />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default BasketItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingHorizontal: 22,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 20
    },
    deleteBtn: {
        position: 'absolute',
        top: 15,
        right: 15,
        padding: 5
    },
    productName: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.black,
        padding: 7
    },
    productPrice: {
        fontWeight: '700',
        fontSize: 17,
        color: COLORS.btnColor,
        padding: 7
    },
    color: {
        width: 90,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorName: {
        fontWeight: '500',
        fontSize: 14,
        color: COLORS.titlecolor,
        padding: 7
    },
    colorTitle: {
        fontWeight: '500',
        fontSize: 14,
        color: COLORS.titlecolor,
    }
})