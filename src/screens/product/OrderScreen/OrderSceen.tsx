import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/Color'
import OrdersItem from './OrdersItem'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const OrderSceen = () => {
    const { allOrder } = useRootStore().basketStore
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Мои заказы' showArrow onPress={() => navigation.goBack()} />
            <FlatList
                data={allOrder}
                renderItem={({ item }) => <OrdersItem orderData={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 12
                }}
            />
        </View>
    )
}

export default observer(OrderSceen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
        marginBottom: 50
    }
})