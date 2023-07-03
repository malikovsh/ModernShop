import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import NewsItem from './NewsItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'

const DATA = [
    1, 2, 3
]

const NewsComponents = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View>
            <TitleComponent title='Новости' textBtn='Все' onPress={() => navigation.navigate('News')} />
            <FlatList
                data={DATA}
                renderItem={({ item }) => <NewsItem title='Мы оказываем широкий спектр услуг.'
                    description='Квартирные, офисные и дачные переезды– это наша ежедневная ...'
                    onPress={() => navigation.navigate('NewsCard')} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10 }}
            />
        </View>
    )
}

export default NewsComponents

const styles = StyleSheet.create({})