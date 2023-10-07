import { Dimensions, FlatList, LayoutAnimation, Platform, StyleSheet, Text, UIManager, View } from 'react-native'
import React, { useRef, useState } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import BasketItem from '../../../components/basketItem/BasketItem'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import OrderModal from '../../../components/Modal/OrderModal'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import LottieView from 'lottie-react-native';

const BasketScreen = () => {

    const navigation = useNavigation<StackNavigationType>();
    const [open, setOpen] = useState(false)
    const { inBasket, order, clear } = useRootStore().basketStore

    const EmptyListMessage = () => {

        const animation = useRef(null);

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    source={require('../../../assets/Animat.json')}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TitleNavbar title='Корзина' />
            {
                inBasket.length === 0 ?
                    <EmptyListMessage /> :
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={inBasket}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => <BasketItem
                                data={item}
                                description='128 GB'
                                onPress={() => navigation.navigate}
                            />}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: 6,
                                paddingBottom: 280,
                            }}
                        />
                        <View style={{
                            position: 'absolute',
                            bottom: 30,
                            alignSelf: "center",
                            width: '110%'
                        }}>
                            <Button text='Заказать' onPress={() => order(() => setOpen(true))} />
                        </View>
                    </View>
            }
            {/* <View style={styles.allPrice}>
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
            </View> */}
            <OrderModal visible={open} onClose={() => { setOpen(false); clear() }} />
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