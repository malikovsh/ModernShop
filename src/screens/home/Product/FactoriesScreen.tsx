import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import { useNavigation } from '@react-navigation/native'
import FactoryCard from './FactoryCard'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'



const FactoriesScreen = () => {

    const { allVendors, isLoading } = useRootStore().vendoreStoage

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={allVendors}
                renderItem={({ item }) => <FactoryCard data={item} />}
                contentContainerStyle={{
                    gap: 10,
                    paddingBottom: 20
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default observer(FactoriesScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})