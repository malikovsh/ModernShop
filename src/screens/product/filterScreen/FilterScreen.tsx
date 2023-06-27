import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { COLORS } from '../../../constants/Color'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth'

const FilterScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Фильтр' showArrow onPress={() => navigation.navigate('BottomTab')} />
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.bgColor
    }
})