import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import useRootStore from '../../../hooks/useRootStore'

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const ProductDATA = [
    1, 2, 3, 4, 5, 6, 7, 8
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const ProductsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allProducts, getAllProducts, isLoading } = useRootStore().productStore

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <View style={styles.container}>
            <TitleNavbar title='Товары' showArrow onPress={() => navigation.goBack()} />
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <ButtonNavBar title='Все' onPress={() => navigation.navigate} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5,
                        paddingVertical: 10
                    }}
                />
            </View>
            <FlatList
                data={allProducts.products}
                renderItem={({ item }) => <NewProductsItem
                    data={item}
                    onPress={() => navigation.navigate('ProductCard')}
                />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 30 }}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP
                }}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})