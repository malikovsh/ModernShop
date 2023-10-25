import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const BorderColorData = [
    {
        id: 0,
        title: 'Все',
    },
    {
        id: 1,
        title: 'Одежда',
    },
    {
        id: 2,
        title: 'Телефоны',
    },
    {
        id: 3,
        title: 'Телефоны',
    }
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const ProductsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allVendorProduct } = useRootStore().vendoreStoage

    return (
        <View style={styles.container}>
            <TitleNavbar title='Товары' showArrow onPress={() => navigation.goBack()} />
            {/* <View>
                <FlatList
                    data={BorderColorData}
                    renderItem={({ item }) =>
                        <ButtonNavBar
                            selectColor={selectBtnColor === item.id}
                            onSelectColor={() => setSelectBtnColor(item.id)}
                            title={item.title}
                        />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5,
                        paddingVertical: 10
                    }}
                />
            </View> */}
            <FlatList
                data={allVendorProduct.products}
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

export default observer(ProductsScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})