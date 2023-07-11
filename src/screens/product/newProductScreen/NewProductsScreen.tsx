import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'



const BorderColorData = [
    {
        id: 0,
        title: 'Все',
    },
    {
        id: 1,
        title: 'Одежда',
    },
    {
        id: 2,
        title: 'Телефоны',
    },
    {
        id: 3,
        title: 'Телефоны',
    }
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

const NewProductsScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { allProducts, getAllProducts, isLoading } = useRootStore().productStore
    const [selectBtnColor, setSelectBtnColor] = useState<number>(BorderColorData[0].id)

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <View style={styles.container}>
            <TitleNavbar title='Новые продукты' showArrow onPress={() => navigation.goBack()} />
            <View>
                <FlatList
                    data={BorderColorData}
                    renderItem={({ item }) =>
                        <ButtonNavBar selectColor={selectBtnColor === item.id}
                            onSelectColor={() => setSelectBtnColor(item.id)}
                            title={item.title} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5,
                        paddingVertical: 10
                    }}
                />
            </View>
            <FlatList
                data={allProducts.products}
                renderItem={({ item }) => <NewProductsItem
                    onPress={() => navigation.navigate('ProductCard')}
                    data={item}
                />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{
                    columnGap: COLUMN_GAP
                }}
            />
        </View>
    )
}

export default observer(NewProductsScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
        paddingBottom: 30,
    }
})