import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonNavBar from '../../../components/uikit/BottonNavBar'
import { useNavigation } from '@react-navigation/native'
import FactoryCard from './FactoryCard'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'



const FactoriesScreen = () => {

    const { allVendors } = useRootStore().vendoreStoage
    // const [selectBtnColor, setSelectBtnColor] = useState<number>(BorderColorData[0].id)

    return (
        <View style={styles.container}>
            {/* <View>
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
            </View> */}
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