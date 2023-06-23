import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth'
import NewProductsItem from '../../../components/newProdut/NewProductsItem'

const NewProductsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Новые продукты' showArrow onPress={() => navigation.navigate('BottomTab')} />
            <NewProductsItem productName='Iphone 14 PRO' category='Iphone 14 PRO' productPrice='13.000.000 сум' />
        </View>
    )
}

export default NewProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})