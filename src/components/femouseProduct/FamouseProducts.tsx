import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import NewProductsItem from '../newProdut/NewProductsItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'
import useRootStore from '../../hooks/useRootStore'

const FamouseProducts = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allProducts, getAllProducts, isLoading } = useRootStore().productStore

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <View style={styles.container}>
            <TitleComponent
                title="Популярные продукты"
                textBtn='Все продукты'
                onPress={() => navigation.navigate('Famouse')} />
            <FlatList
                data={allProducts.products}
                renderItem={({ item }) => <NewProductsItem
                    onPress={() => navigation.navigate('ProductCard')}
                    data={item}
                    showFamouse />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
            />
        </View>
    )
}

export default FamouseProducts

const styles = StyleSheet.create({
    container: {
        marginTop: 13,
    }
})