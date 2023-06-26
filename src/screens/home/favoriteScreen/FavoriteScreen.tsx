import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem from '../../../components/newProdut/NewProductsItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth'

const FavoriteScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Избранное' />
            <NewProductsItem
                productName='Iphone 14 PRO'
                category='Телефоны'
                productPrice='13.000.000 сум'
                onPress={() => navigation.navigate('ProductCard')} />
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
})