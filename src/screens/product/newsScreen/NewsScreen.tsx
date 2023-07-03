import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import NewsItem, { CATALOG_CARD_WIDTH } from '../../../components/news/NewsItem'
import { FlatList } from 'react-native'

const DATA = [
    1, 2, 3, 4, 5, 6
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const NewsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar
                title='Популярные продукты'
                showArrow onPress={() => navigation.navigate('BottomTab')} />
            {/* <NewsItem
                title='Мы оказываем широкий спектр услуг.'
                description='Квартирные, офисные и дачные переезды– это наша ежедневная ...'
                onPress={() => navigation.navigate('NewsCard')} /> */}
            <FlatList
                data={DATA}
                renderItem={({ item }) => <NewsItem
                    title='Мы оказываем широкий спектр услуг.'
                    description='Квартирные, офисные и дачные переезды– это наша ежедневная ...'
                    onPress={() => navigation.navigate('NewsCard')} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 20 }}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP
                }}
            />
        </View>
    )
}

export default NewsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})