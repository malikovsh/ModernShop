import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/Color'
import OrdersItem from './OrdersItem'

const Data = [
    {
        id: 1
    },
    {
        id: 2
    }
]

const OrderSceen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Мои заказы' showArrow onPress={() => navigation.goBack()} />
            <FlatList
                data={Data}
                renderItem={({ item }) => <OrdersItem />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 12
                }}
            />
        </View>
    )
}

export default OrderSceen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
        marginBottom: 50
    }
})