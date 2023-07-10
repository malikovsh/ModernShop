import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { DeleteIcon } from '../../assets/icons/icons'
import CounterBox from '../uikit/CounterBox'

type BasketProps = {
    productName?: string;
    description?: string;
    productPrice?: string;
    onPress: () => void;
}

const BasketItem = ({ productName, productPrice, description, onPress }: BasketProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{ width: '20%' }}>
                <Image source={require('./../../assets/Images/phone.png')} />
            </View>
            <View style={{ width: "80%", }}>
                <Text style={styles.productName}>{productName}</Text>
                <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }} >
                    <View style={styles.color}></View>
                    <Text style={styles.colorName}>Цвет</Text>
                    <Text style={[styles.colorName, {}]}>|</Text>
                    <Text style={styles.colorName}>{description}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.productPrice}>{productPrice}</Text>
                    <CounterBox />
                </View>
            </View>
            <TouchableOpacity style={styles.deleteBtn} onPress={onPress}>
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
        gap: 25

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
        width: 15,
        height: 15,
        backgroundColor: COLORS.ellipseColor,
        borderRadius: 15,
    },
    colorName: {
        fontWeight: '500',
        fontSize: 14,
        color: COLORS.titlecolor,
        padding: 7
    }
})