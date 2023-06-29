import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import CategoriesComponent from '../../../components/categories/CategoriesComponent'
import CategriesItem from '../../../components/categories/CategriesItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'

const CategoriesScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Категории' showArrow onPress={() => navigation.navigate('BottomTab')} />
            <CategriesItem title='Телефоны' onPress={() => navigation.navigate('Phone')} />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})