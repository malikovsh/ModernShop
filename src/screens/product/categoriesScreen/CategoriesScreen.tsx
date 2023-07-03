import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import CategoriesComponent from '../../../components/categories/CategoriesComponent'
import CategriesItem, { CATALOG_CARD_WIDTH } from '../../../components/categories/CategriesItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'

const DATA = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 3) - 40) / 2


const CategoriesScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Категории' showArrow onPress={() => navigation.goBack()} />
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <CategriesItem title='Телефоны' onPress={() => navigation.navigate('Phone')} />}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP
                }}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
        paddingBottom: 30
    }
})