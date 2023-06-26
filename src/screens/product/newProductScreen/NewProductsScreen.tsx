import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth'
import NewProductsItem from '../../../components/newProdut/NewProductsItem'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'



const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const NewProductsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Новые продукты' showArrow onPress={() => navigation.navigate('BottomTab')} />
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <ButtonNavBar title='Все' onPress={() => navigation.navigate} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5,
                        paddingVertical: 10
                    }}
                />
            </View>
            <NewProductsItem onPress={() => navigation.navigate('ProductCard')} productName='Iphone 14 PRO' category='Iphone 14 PRO' productPrice='13.000.000 сум' />
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
{/* <ButtonNavBar title='Все' onPress={() => navigation.navigate} /> */ }