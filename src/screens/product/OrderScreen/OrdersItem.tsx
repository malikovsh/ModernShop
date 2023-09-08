import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import OrdersItemBox from './OrdersItemBox'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../home/HomeStack'

const data = [
    {
        id: 1
    },
    {
        id: 2
    }
]

const OrdersItem = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <View style={styles.titleBar}>
                <View style={{
                    backgroundColor: COLORS.btnColor,
                    borderRadius: 20,
                    padding: 12
                }}>
                    <Text style={styles.number}>№ 13</Text>
                </View>
                <Text style={styles.title}>Статус: На рассмотрении</Text>
            </View>
            <View style={styles.orderView}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <OrdersItemBox
                        image={require('./../../../assets/Images/phone.png')}
                        productName='Iphone 14 PRO'
                        count='2'
                        price='900000' />}
                    showsVerticalScrollIndicator={false}
                />
                <Text style={styles.allPrice}>
                    Итого: <Text style={{ color: COLORS.btnColor }}>18.000.000 сум</Text>
                </Text>
                <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('Writing')}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                        color: COLORS.btnColor
                    }}>Связаться с продавцом</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrdersItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 20
    },
    orderView: {
        paddingHorizontal: 20
    },
    titleBar: {
        flexDirection: "row",
        gap: 41,
        alignItems: "center"
    },
    number: {
        color: COLORS.white,
        fontWeight: '700',
        fontSize: 17
    },
    title: {
        fontWeight: '700',
        fontSize: 17,
        color: COLORS.black
    },
    allPrice: {
        alignSelf: "center",
        fontSize: 19,
        fontWeight: '700',
        color: COLORS.black
    },
    chat: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: COLORS.btnColor,
        marginTop: 13,
        marginBottom: 25
    }
})