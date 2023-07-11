import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import { useNavigation } from '@react-navigation/native'
import FactoryCard from './FactoryCard'

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
const CardDATA = [
    1, 2, 3
]

const FactoriesScreen = () => {

    const [selectBtnColor, setSelectBtnColor] = useState<number>(BorderColorData[0].id)

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={BorderColorData}
                    renderItem={({ item }) =>
                        <ButtonNavBar
                            selectColor={selectBtnColor === item.id}
                            onSelectColor={() => setSelectBtnColor(item.id)}
                            title={item.title} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5,
                        paddingVertical: 22
                    }}
                />
            </View>

            <FlatList
                data={CardDATA}
                renderItem={({ item }) => <FactoryCard />}
                contentContainerStyle={{
                    gap: 10,
                    paddingBottom: 20
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default FactoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})