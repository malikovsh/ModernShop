import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/Color'
import OrdersItem from './OrdersItem'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import LottieView from 'lottie-react-native';

const OrderSceen = () => {
    const { allOrder } = useRootStore().basketStore
    const navigation = useNavigation()

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
            <TitleNavbar title='Мои заказы' showArrow onPress={() => navigation.goBack()} />
            {allOrder.length === 0 ?
                <EmptyListMessage /> :
                <FlatList
                    data={allOrder}
                    renderItem={({ item }) => <OrdersItem orderData={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 12
                    }}
                />
            }
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