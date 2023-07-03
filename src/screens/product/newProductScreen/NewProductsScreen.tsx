import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'



const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const newProdutDATA = [
    1, 2, 3, 4, 5, 6, 7, 8
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const NewProductsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Новые продукты' showArrow onPress={() => navigation.goBack()} />
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
                data={newProdutDATA}
                renderItem={({ item }) => <NewProductsItem
                    onPress={() => navigation.navigate('ProductCard')}
                    productName='Iphone 14 PRO' category='Iphone 14 PRO'
                    productPrice='13.000.000 сум' />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP
                }}
            />
        </View>
    )
}

export default NewProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
        paddingBottom: 30,
    }
})