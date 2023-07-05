import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import CategriesItem from '../../../components/categories/CategriesItem'
import { useNavigation } from '@react-navigation/native'
import { FavoriteIcon } from '../../../assets/icons/icons'
import StorageBtn from '../../../components/uikit/StorageBtn'
import ImageCarousel from '../../../components/carousel/CostumCarousel'
import ProductsCardItem from './ProductsCardItem'
import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer'
import { keys } from 'mobx'


const data = [
    {
        id: 0,
        image: require('./../../../assets/Images/phone.png')
    },
    {
        id: 1,
        image: require('./../../../assets/Images/phone.png')
    },
    {
        id: 2,
        image: require('./../../../assets/Images/phone.png')
    },
    {
        id: 3,
        image: require('./../../../assets/Images/phone.png')
    }
];

const ProductCard = () => {

    const navigation = useNavigation()

    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.bgColor }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <TitleNavbar showArrow title='' onPress={() => navigation.goBack()} />
                </View>

                <View style={styles.description}>
                    <View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <ProductsCardItem imageUrl={item.image} />}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 20,
                                gap: 6,
                                paddingVertical: 10
                            }}
                        />
                    </View>
                    <View style={styles.productName}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '700'
                        }}>Iphone 14 PRO</Text>
                        <TouchableOpacity>
                            <FavoriteIcon isFocus={false} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.informationTitle}>Описание</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.titlecolor
                        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, excepturi? Voluptates fugit ratione nemo,
                            laborum dignissimos tenetur. Atque vitae eum corporis
                            ullam sunt officiis ab animi nam, deserunt ex ad
                            dolores molestiae mollitia quidem,
                        </Text>
                        <TouchableOpacity style={{ alignSelf: "center", padding: 5 }}>
                            <Text style={{ color: COLORS.btnColor, textDecorationLine: 'underline' }}>Подробнее...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.characteristic}>
                        <Text style={styles.informationTitle}>Характеристики</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.titlecolor
                        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, excepturi? Voluptates fugit ratione nemo,
                            laborum dignissimos tenetur. Atque vitae eum corporis
                            ullam sunt officiis ab animi nam, deserunt ex ad
                            dolores molestiae mollitia quidem,
                        </Text>
                        <TouchableOpacity style={{ alignSelf: "center", padding: 5 }}>
                            <Text style={{ color: COLORS.btnColor, textDecorationLine: 'underline' }}>Подробнее...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.storage}>
                        <Text style={styles.informationTitle}>Память</Text>
                        <StorageBtn title='128 гб' />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        paddingBottom: 30
    },
    description: {
        marginTop: 60,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 20
    },
    productName: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: "space-between",
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    information: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    informationTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: COLORS.black,
        paddingBottom: 7,
    },
    characteristic: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    storage: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
})