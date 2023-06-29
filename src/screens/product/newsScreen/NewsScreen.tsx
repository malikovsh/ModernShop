import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import NewsItem from '../../../components/news/NewsItem'

const NewsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar
                title='Популярные продукты'
                showArrow onPress={() => navigation.navigate('BottomTab')} />
            <NewsItem
                title='Мы оказываем широкий спектр услуг.'
                description='Квартирные, офисные и дачные переезды– это наша ежедневная ...'
                onPress={() => navigation.navigate('NewsCard')} />
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