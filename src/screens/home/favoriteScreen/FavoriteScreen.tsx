import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'

const DATA = [
    1, 2, 3, 4
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2


const FavoriteScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Избранное' />
            {/* <NewProductsItem
                productName='Iphone 14 PRO'
                category='Телефоны'
                productPrice='13.000.000 сум'
                onPress={() => navigation.navigate('ProductCard')} isFocus={true} /> */}
            <FlatList
                data={DATA}
                renderItem={({ item }) => <NewProductsItem
                    productName='Iphone 14 PRO'
                    category='Телефоны'
                    productPrice='13.000.000 сум'
                    onPress={() => navigation.navigate('ProductCard')} isFocus={true} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 20 }}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP
                }}
            />
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }
})