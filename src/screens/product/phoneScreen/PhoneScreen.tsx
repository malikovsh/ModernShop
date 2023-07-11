import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { FilterIcon } from '../../../assets/icons/icons'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import { StackNavigationType } from '../../home/HomeStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const PhoneScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allProducts, getAllProducts, isLoading } = useRootStore().productStore

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.tabNavBar}>
                <TitleNavbar
                    title='Телефоны'
                    showArrow
                    showFilter
                    onPress={() => navigation.goBack()} />
                <TouchableOpacity style={styles.filterBtn} onPress={() => navigation.navigate('Filter')}>
                    <FilterIcon />
                </TouchableOpacity>
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

export default observer(PhoneScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        paddingHorizontal: 20
    },
    tabNavBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    filterBtn: {
        padding: 15,
        backgroundColor: COLORS.white,
        borderRadius: 20
    }
})