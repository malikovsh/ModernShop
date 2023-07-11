import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const DATA = [
    1, 2, 3, 4
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2


const FavoriteScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { inFavouriteProducts, togleFavourite } = useRootStore().favouriteStore

    return (
        <View style={styles.container}>
            <TitleNavbar title='Избранное' />
            <FlatList
                data={inFavouriteProducts}
                renderItem={({ item }) => <NewProductsItem
                    data={item}
                    onPress={() => navigation.navigate('ProductCard')} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 20 }}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default observer(FavoriteScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }
})