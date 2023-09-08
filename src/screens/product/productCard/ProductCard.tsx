import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { FavoriteIcon, MassageIcon } from '../../../assets/icons/icons'
import StorageBtn from '../../../components/uikit/StorageBtn'
import ProductsCardItem from './ProductsCardItem'
import ProductsCardCarousel from '../../../components/carousel/ProductsCardCarousel'
import ColorBtn from '../../../components/uikit/ColorBtn'
import Button from '../../../components/button/Button'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { StackNavigationType } from '../../home/HomeStack'

const ProductCard = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { oneProduct, isLoading, selectColorAndStore, setColorWithStore, oneProductColors, oneProductStorages } = useRootStore().productStore
    const { togleBasket } = useRootStore().basketStore

    // const options = useMemo(() => {
    //     const colors = oneProduct.props || [];
    //     const storages = oneProduct.props || [];

    //     return {
    //         colors,
    //         storages
    //     }
    // }, [oneProduct?.props])


    if (isLoading) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <TitleNavbar showArrow title='' onPress={() => navigation.goBack()} />
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.bgColor }} showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20 }}>
                    <ProductsCardCarousel data={oneProduct.media} />
                </View>
                <View style={styles.description}>
                    <View>
                        <FlatList
                            data={(oneProduct.media ||= [])}
                            renderItem={({ item }) => <ProductsCardItem data={item} />}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 20,
                                gap: 6,
                                paddingVertical: 10
                            }}
                            keyExtractor={(_, index) => `${index}-1`}
                        />
                    </View>
                    <View style={styles.productName}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '700'
                        }}>{oneProduct.name}</Text>
                        <TouchableOpacity>
                            <FavoriteIcon isFocus={false} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.informationTitle}>Описание</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.titlecolor
                        }}>
                            {oneProduct.description}
                        </Text>
                        <TouchableOpacity style={{ alignSelf: "center", padding: 5 }}>
                            <Text style={{ color: COLORS.btnColor, textDecorationLine: 'underline' }}>Подробнее...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.storage}>
                        <Text style={styles.informationTitle}>Память</Text>
                        <FlatList
                            data={oneProductStorages}
                            renderItem={({ item }) =>
                                <StorageBtn
                                    title={item.value}
                                    selectColor={selectColorAndStore.store === item.value}
                                    onSelectColor={() => setColorWithStore(selectColorAndStore.color, item.value)}
                                />}
                            horizontal
                            contentContainerStyle={{ gap: 5 }}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(_, index) => `${index}-1`}
                        />
                    </View>
                    <View style={styles.color}>
                        <Text style={styles.informationTitle}>Цвет</Text>
                        <FlatList
                            data={oneProductColors}
                            renderItem={({ item }) =>
                                <ColorBtn
                                    title={item.value}
                                    selectColor={selectColorAndStore.color === item.value}
                                    onSelectColor={() => setColorWithStore(item.value, selectColorAndStore.store)}
                                />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 7 }}
                            keyExtractor={(_, index) => `${index}-1`}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomPart}>
                <View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: COLORS.titlecolor
                    }}>
                        Стоимость
                    </Text>
                    <Text style={{
                        fontSize: 23,
                        fontWeight: '700',
                        color: COLORS.black,
                        paddingVertical: 5
                    }}>
                        {oneProduct?.price[0].price} сум
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Writing')}>
                    <MassageIcon />
                </TouchableOpacity>
                <Button text='В корзину' BasketIcon={true} onPress={() => togleBasket(oneProduct, selectColorAndStore.color, selectColorAndStore.store)} />
            </View>
        </View>
    )
}

export default observer(ProductCard)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        paddingBottom: 30
    },
    description: {
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 20
    },
    productName: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: "space-between",
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    information: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    informationTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: COLORS.black,
        paddingBottom: 7
    },
    characteristic: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor,
        gap: 10
    },
    storage: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    color: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    bottomPart: {
        width: '70%',
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingTop: 20,
        gap: 10
    }
})