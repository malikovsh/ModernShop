import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TitleComponent from '../uikit/Titlecomponent'
import { useNavigation } from '@react-navigation/native'
import CategriesItem from './CategriesItem'
import { StackNavigationType } from '../../screens/auth/AuthStack'

const CategoriesDATA = [
    {
        id: 0,
        uri: 'https://seeddownload.cdn-apple.com/s3/prod/SEED/package/T043383A-en_AU/4.0/T043383A-iPhone14Pro-FL-AR_2_2/images/T043383A_desktop-hero-2136x1068.png',
        title: 'Телефоны'
    },
    {
        id: 1,
        uri: 'https://img.freepik.com/premium-vector/suit-logo_107708-321.jpg',
        title: 'Одежда'
    },
    {
        id: 2,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    },
    {
        id: 3,
        uri: 'https://image.similarpng.com/very-thumbnail/2022/01/House-icon-illustration-on-transparent-background-PNG.png',
        title: 'Для дома'
    }
]

const CategoriesComponent = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleComponent title='Категории для вас' textBtn='Все' onPress={() => navigation.navigate('Categories')} />
            {/* <CategriesItem title='Телефоны' onPress={() => navigation.navigate('Phone')} /> */}
            <FlatList
                data={CategoriesDATA}
                renderItem={({ item }) => <CategriesItem image={item.uri} title={item.title} onPress={() => navigation.navigate('Phone')} />}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 8 }}
            />
        </View>
    )
}

export default CategoriesComponent

const styles = StyleSheet.create({
    container: {
        paddingVertical: 13
    }
})