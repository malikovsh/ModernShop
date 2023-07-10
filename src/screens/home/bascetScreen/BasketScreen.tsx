import { Dimensions, FlatList, LayoutAnimation, Platform, StyleSheet, Text, UIManager, View } from 'react-native'
import React, { useState } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import BasketItem from '../../../components/basketItem/BasketItem'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import OrderModal from '../../../components/Modal/OrderModal'
import { StackNavigationType } from '../../auth/AuthStack'

const { width } = Dimensions.get('window');

const layoutAnimConfig = {
    duration: 300,
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
        duration: 100,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
    },
};

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DATA = [
    {
        id: 0,
    },
    {
        id: 1,
    },
    {
        id: 2
    }
]

const BasketScreen = () => {

    const navigation = useNavigation<StackNavigationType>();
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(DATA);
    const removeItem = (id: any) => {
        let arr = data.filter(function (item) {
            return item.id !== id
        })
        setData(arr);
        LayoutAnimation.configureNext(layoutAnimConfig)
    };

    return (
        <View style={styles.container}>
            <View>
                <TitleNavbar title='Корзина' />
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <BasketItem
                        productName='Iphone 14 PRO'
                        description='Память: 128 гб'
                        productPrice='13.000.000 сум'
                        onPress={() => removeItem(item.id)}
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

export default BasketScreen

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