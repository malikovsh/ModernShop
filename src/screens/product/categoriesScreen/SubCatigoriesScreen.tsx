import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import SubCatigory from '../../../components/categories/SubCatItem'
import { useRoute } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const SubCatigoriesScreen = () => {

    const route = useRoute<any>();

    const navigation = useNavigation<StackNavigationType>()
    const { subCatigories, setSubCatigories } = useRootStore().catigoryStore

    return (
        <View style={styles.container}>
            <TitleNavbar title={route.params.title} showArrow onPress={() => navigation.goBack()} />
            <FlatList
                data={subCatigories}
                renderItem={({ item }) =>
                    <SubCatigory
                        data={item}
                        onPress={() => {
                            setSubCatigories(subCatigories)
                            navigation.navigate('Phone', {
                                title: item.name
                            } as any)
                        }} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 10
                }}
            />
        </View>
    )
}

export default observer(SubCatigoriesScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor,
        paddingBottom: 30
    }
})