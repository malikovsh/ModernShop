import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import NewProductsItem from '../newProdut/NewProductsItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'

const DATA = [
    1, 2, 3
]

const FamouseProducts = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleComponent
                title="Популярные продукты"
                textBtn='Все продукты'
                onPress={() => navigation.navigate('Famouse')} />
            <FlatList
                data={DATA}
                renderItem={({ item }) => <NewProductsItem
                    onPress={() => navigation.navigate('ProductCard')}
                    productName='Iphone 14 PRO' category='Телефоны'
                    productPrice='13.000.000 сум'
                    showFamouse />}
                horizontal={true}
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