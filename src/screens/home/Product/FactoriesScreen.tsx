import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import { useNavigation } from '@react-navigation/native'
import FactoryCard from './FactoryCard'

const DATA = [1, 2, 3, 4]

const FactoriesScreen = () => {

    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <ButtonNavBar title='Одежда' onPress={() => navigation.navigate} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5,
                        paddingVertical: 22
                    }}
                />
            </View>
            <View>
                <FactoryCard />
            </View>
        </View>
    )
}

export default FactoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})