import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import CategriesItem from './CategriesItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'

const CategoriesDATA = [
    1, 2, 3, 4
]

const CategoriesComponent = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleComponent title='Категории для вас' textBtn='Все' onPress={() => navigation.navigate('Categories')} />
            {/* <CategriesItem title='Телефоны' onPress={() => navigation.navigate('Phone')} /> */}
            <FlatList
                data={CategoriesDATA}
                renderItem={({ item }) => <CategriesItem title='Телефоны' onPress={() => navigation.navigate('Phone')} />}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 8 }}
            />
        </View>
    )
}

export default CategoriesComponent

const styles = StyleSheet.create({
    container: {
        paddingVertical: 13
    }
})