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
        uri: 'https://s.yimg.com/uu/api/res/1.2/NoQRhHGBqs3yr89l7yiDxg--~B/aD0xMDEzO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-09/25c681c0-1cfe-11ec-b1ed-aff3c2fd2c38.cf.jpg',
        title: 'Dahlia',
    },
    {
        id: 1,
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNM9Lde3NxvJI2uY1UeN37QNmHyim8cWJv4w&usqp=CAU',
        title: 'Dahlia',
    },
    {
        id: 2,
        uri: 'https://media.designcafe.com/wp-content/uploads/2020/12/10181909/pop-designs-for-your-home.jpg',
        title: 'Dahlia',
    },
    {
        id: 3,
        uri: 'https://writers.com/wp-content/uploads/2021/11/gift-ideas-for-writers-scaled-e1637685660360.jpg',
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