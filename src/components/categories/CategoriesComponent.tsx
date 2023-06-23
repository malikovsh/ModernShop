import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import CategriesItem from './CategriesItem'
import { StackNavigationType } from '../../screens/auth'

const CategoriesComponent = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleComponent title='Категории для вас' textBtn='Все' onPress={() => navigation.navigate('Categories')} />
            <CategriesItem title='Телефоны' onPress={() => navigation.navigate} />
        </View>
    )
}

export default CategoriesComponent

const styles = StyleSheet.create({
    container: {
        paddingVertical: 13
    }
})