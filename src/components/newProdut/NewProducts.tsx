import { FlatList, StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import NewProductsItem from './NewProductsItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'
import useRootStore from '../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const NewProducts = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allProducts, getAllProducts, isLoading } = useRootStore().productStore

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <View>
            <TitleComponent title='Новые продукты' textBtn='Все продукты' onPress={() => navigation.navigate('NewProducts')} />
            {isLoading && <Text>Loading...</Text>}
            <FlatList
                data={allProducts.products}
                renderItem={({ item }) => <NewProductsItem
                    data={item}
                    onPress={() => navigation.navigate("ProductCard")}
                />}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 8 }}
            />
        </View>
    )
}

export default observer(NewProducts)

const styles = StyleSheet.create({})