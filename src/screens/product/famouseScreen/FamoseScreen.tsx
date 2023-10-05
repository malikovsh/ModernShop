import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'


const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const FamoseScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allProducts } = useRootStore().productStore

    return (
        <View style={styles.container}>
            <TitleNavbar
                title='Популярные продукты'
                showArrow onPress={() => navigation.navigate('BottomTab')} />
            <FlatList
                data={allProducts.products}
                renderItem={({ item }) => <NewProductsItem
                    data={item}
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

export default observer(FamoseScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})