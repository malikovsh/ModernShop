import { Dimensions, FlatList, LayoutAnimation, Platform, StyleSheet, Text, UIManager, View } from 'react-native'
import React, { useState } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import BasketItem from '../../../components/basketItem/BasketItem'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import OrderModal from '../../../components/Modal/OrderModal'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const BasketScreen = () => {

    const navigation = useNavigation<StackNavigationType>();
    const [open, setOpen] = useState(false)
    const { inBasket } = useRootStore().basketStore

    return (
        <View style={styles.container}>
            <View>
                <TitleNavbar title='Корзина' />
                <FlatList
                    data={inBasket}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <BasketItem
                        data={item}
                        description='128 GB'
                        onPress={() => navigation.navigate}
                    />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 6,
                        paddingBottom: 280
                    }}
                />
            </View>
            <View style={styles.allPrice}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14,
                    color: COLORS.titlecolor,
                    padding: 5
                }}>Итого</Text>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '700',
                    color: COLORS.black,
                    padding: 5
                }}>13.000.000 сум</Text>
            </View>
            <View style={{
                position: 'absolute',
                bottom: 30,
                alignSelf: "center",
                width: '110%'
            }}>
                <Button text='Заказать' onPress={() => setOpen(true)} />
            </View>
            <OrderModal visible={open} onClose={() => setOpen(false)} />
        </View>
    )
}

export default observer(BasketScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
    },
    allPrice: {
        width: "100%",
        backgroundColor: COLORS.white,
        paddingHorizontal: 22,
        paddingVertical: 12,
        borderRadius: 20,
        position: 'absolute',
        bottom: 107,
        alignSelf: "center"
    }
})