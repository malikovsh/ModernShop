import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'

const DATA = [
    1, 2, 3, 4, 5, 6, 7, 8
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const FamoseScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar
                title='Популярные продукты'
                showArrow onPress={() => navigation.navigate('BottomTab')} />
            {/* <NewProductsItem
                productName='Iphone 14 PRO'
                category='Iphone 14 PRO'
                productPrice='13.000.000 сум'
                showFamouse onPress={() => navigation.navigate('ProductCard')} /> */}
            <FlatList
                data={DATA}
                renderItem={({ item }) => <NewProductsItem
                    productName='Iphone 14 PRO'
                    category='Телефоны'
                    productPrice='13.000.000 сум'
                    onPress={() => navigation.navigate('ProductCard')}
                    showFamouse />}
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

export default FamoseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})