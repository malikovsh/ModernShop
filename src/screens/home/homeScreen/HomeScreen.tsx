import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import SearchNavBar from '../../../components/uikit/SearchNavBar'
import { useNavigation } from '@react-navigation/native'
import CategoriesComponent from '../../../components/categories/CategoriesComponent'
import NewProducts from '../../../components/newProdut/NewProducts'
import FamouseProducts from '../../../components/femouseProduct/FamouseProducts'
import NewsComponents from '../../../components/news/NewsComponents'
import GapView from '../../../components/GapView/GapView'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1,
                paddingTop: 25,
            }}>
                <SearchNavBar onPress={() => navigation.navigate} />
                <CategoriesComponent />
                <NewProducts />
                <FamouseProducts />
                <NewsComponents />
                <GapView height={60} />
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})