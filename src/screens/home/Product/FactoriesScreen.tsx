import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import { useNavigation } from '@react-navigation/native'

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const FactoriesScreen = () => {

    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <ButtonNavBar title='Все' onPress={() => navigation.navigate} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5,
                        paddingVertical: 22
                    }}
                />
            </View>
            <View>

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