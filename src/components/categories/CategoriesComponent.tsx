import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import CategriesItem from './CategriesItem'
import useRootStore from '../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { StackNavigationType } from '../../screens/home/HomeStack'


const CategoriesComponent = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allCatigories, getAllCatigories, isLoading, setSubCatigories } = useRootStore().catigoryStore

    useEffect(() => {
        getAllCatigories()
    }, [])

    return (
        <View style={styles.container}>
            <TitleComponent title='Категории для вас' textBtn='Все' onPress={() => navigation.navigate('Categories')} />
            <FlatList
                data={allCatigories}
                renderItem={({ item }) => <CategriesItem
                    data={item}
                    onPress={() => {
                        setSubCatigories(item.subcategories)
                        navigation.navigate('SubCatigory', {
                            title: item.name
                        } as any)
                    }} />}
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