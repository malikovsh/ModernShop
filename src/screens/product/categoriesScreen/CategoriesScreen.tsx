import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import CategoriesComponent from '../../../components/categories/CategoriesComponent'
import CategriesItem, { CATALOG_CARD_WIDTH } from '../../../components/categories/CategriesItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'

const DATA = [
    {
        id: 0,
        uri: 'https://seeddownload.cdn-apple.com/s3/prod/SEED/package/T043383A-en_AU/4.0/T043383A-iPhone14Pro-FL-AR_2_2/images/T043383A_desktop-hero-2136x1068.png',
        title: 'Телефоны'
    },
    {
        id: 1,
        uri: 'https://img.freepik.com/premium-vector/suit-logo_107708-321.jpg',
        title: 'Одежда'
    },
    {
        id: 2,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    },
    {
        id: 3,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    },
    {
        id: 4,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    },
    {
        id: 5,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    },
    {
        id: 6,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    },
    {
        id: 7,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    },
    {
        id: 8,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    }
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
                    <CategriesItem image={item.uri} title={item.title} onPress={() => navigation.navigate('Phone')} />}
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