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

const data: any = [
    {
        id: 0,
        uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
        title: 'Dahlia',
    },
    {
        id: 1,
        uri: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7',
        title: 'Dahlia',
    },
    {
        id: 2,
        uri: 'https://images.unsplash.com/photo-1627522460108-215683bdc9f6',
        title: 'Dahlia',
    },
    {
        id: 3,
        uri: 'https://images.unsplash.com/photo-1587814213271-7a6625b76c33',
        title: 'Dahlia',
    },
    {
        id: 4,
        uri: 'https://images.unsplash.com/photo-1588628566587-dbd176de94b4',
        title: 'Dahlia',
    },
    {
        id: 5,
        uri: 'https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e',
        title: 'Dahlia',
    }
];

const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1,
                paddingTop: 25,
            }}>
                <ImageCarousel data={data} />
                <SearchNavBar onPress={() => navigation.navigate('Filter')} />
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