import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import CategriesItem from './CategriesItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'
import useRootStore from '../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'


const CategoriesComponent = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allCatigories, getAllCatigories, isLoading } = useRootStore().catigoryStore

    useEffect(() => {
        getAllCatigories()
    }, [])

    return (
        <View style={styles.container}>
            <TitleComponent title='Категории для вас' textBtn='Все' onPress={() => navigation.navigate('Categories')} />
            {isLoading && <Text>Loading...</Text>}
            {/* <CategriesItem title='Телефоны' onPress={() => navigation.navigate('Phone')} /> */}
            <FlatList
                data={allCatigories}
                renderItem={({ item }) => <CategriesItem
                    data={item}
                    onPress={() => navigation.navigate('Phone')} />}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 8 }}
            />
        </View>
    )
}

export default observer(CategoriesComponent)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 13
    }
})