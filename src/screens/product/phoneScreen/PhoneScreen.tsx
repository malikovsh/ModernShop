import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { FilterIcon } from '../../../assets/icons/icons'
import NewProductsItem from '../../../components/newProdut/NewProductsItem'
import { StackNavigationType } from '../../home/HomeStack'

const PhoneScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <View style={styles.tabNavBar}>
                <TitleNavbar
                    title='Телефоны'
                    showArrow
                    showFilter
                    onPress={() => navigation.goBack()} />
                <TouchableOpacity style={styles.filterBtn} onPress={() => navigation.navigate('Filter')}>
                    <FilterIcon />
                </TouchableOpacity>
            </View>
            <NewProductsItem
                productName='Iphone 14 PRO'
                category='Телефоны'
                productPrice='13.000.000 сум'
                onPress={() => navigation.navigate('ProductCard')} />
        </View>
    )
}

export default PhoneScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        paddingHorizontal: 20
    },
    tabNavBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    filterBtn: {
        padding: 15,
        backgroundColor: COLORS.white,
        borderRadius: 20
    }
})