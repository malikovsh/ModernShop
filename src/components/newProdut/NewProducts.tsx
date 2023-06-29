import { StyleSheet, View } from 'react-native'
import React from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import NewProductsItem from './NewProductsItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'
import ButtonNavBar from '../uikit/BottonNavBar'


const NewProducts = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View>
            <TitleComponent title='Новые продукты' textBtn='Все продукты' onPress={() => navigation.navigate('NewProducts')} />
            <NewProductsItem onPress={() => navigation.navigate("ProductCard")} productName='Iphone 14 PRO' category='Телефоны' productPrice='13.000.000 сум' />
        </View>
    )
}

export default NewProducts

const styles = StyleSheet.create({})