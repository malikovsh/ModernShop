import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'

type Props = {
    image: any,
    productName: string,
    price: number,
    count: number
}

const OrdersItemBox = ({ image, price, productName, count }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{
                    width: '100%',
                    height: "100%",
                }} source={image} />
            </View>
            <View style={styles.titleBox}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700'
                }}>{productName}</Text>
                <View style={{
                    flexDirection: "row",
                    gap: 8
                }}>
                    <Text style={styles.text}>Кол-во: {count}</Text>
                    <Text style={styles.text}>|</Text>
                    <Text style={styles.text}>Стоимость: {price}</Text>
                </View>
            </View>
        </View>
    )
}

export default OrdersItemBox

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 22,
        borderBottomColor: COLORS.titlecolor,
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    image: {
        width: 55,
        height: 70
    },
    titleBox: {
        gap: 5
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        color: COLORS.titlecolor,
    },
})