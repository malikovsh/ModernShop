import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import SearchNavBar from '../../../components/uikit/SearchNavBar'
import { useNavigation } from '@react-navigation/native'
import CategoriesComponent from '../../../components/categories/CategoriesComponent'
import NewProducts from '../../../components/newProdut/NewProducts'
import FamouseProducts from '../../../components/femouseProduct/FamouseProducts'
import NewsComponents from '../../../components/news/NewsComponents'
import GapView from '../../../components/GapView/GapView'
import { StackNavigationType } from '../../auth/AuthStack'
import ImageCarousel from '../../../components/carousel/CostumCarousel'
import useRootStore from '../../../hooks/useRootStore'

const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    const { allCarousel } = useRootStore().carouselStore

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1,
                paddingTop: 25,
            }}>
                <ImageCarousel data={allCarousel} />
                <SearchNavBar onPress={() => navigation.navigate('Filter')} />
                <CategoriesComponent />
                <NewProducts />
                <FamouseProducts />
                {/* <NewsComponents /> */}
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