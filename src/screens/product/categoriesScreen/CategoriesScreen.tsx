import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import CategriesItem, { CATALOG_CARD_WIDTH } from '../../../components/categories/CategriesItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 3) - 50) / 2


const CategoriesScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allCatigories, getAllCatigories, isLoading } = useRootStore().catigoryStore

    useEffect(() => {
        getAllCatigories()
    }, [])

    return (
        <View style={styles.container}>
            <TitleNavbar title='Категории' showArrow onPress={() => navigation.goBack()} />
            <FlatList
                data={allCatigories}
                renderItem={({ item }) =>
                    <CategriesItem
                        data={item}
                        onPress={() => navigation.navigate('Phone')} />}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP,
                    justifyContent: 'space-between'
                }}
            />
        </View>
    )
}

export default observer(CategoriesScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
        paddingBottom: 30
    }
})