import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem from '../../../components/newProdut/NewProductsItem'

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <TitleNavbar title='Избранное' />
            <NewProductsItem productName='Iphone 14 PRO' category='Телефоны' productPrice='13.000.000 сум' />
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