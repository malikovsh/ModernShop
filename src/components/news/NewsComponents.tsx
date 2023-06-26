import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import NewsItem from './NewsItem'
import { StackNavigationType } from '../../screens/auth'

const NewsComponents = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View>
            <TitleComponent title='Новости' textBtn='Все' onPress={() => navigation.navigate('News')} />
            <NewsItem title='Мы оказываем широкий спектр услуг.'
                description='Квартирные, офисные и дачные переезды– это наша ежедневная ...'
                onPress={() => navigation.navigate('NewsCard')} />
        </View>
    )
}

export default NewsComponents

const styles = StyleSheet.create({})