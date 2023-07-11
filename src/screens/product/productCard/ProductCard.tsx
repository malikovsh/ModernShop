import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'
import { FavoriteIcon, MassageIcon } from '../../../assets/icons/icons'
import StorageBtn from '../../../components/uikit/StorageBtn'
import ProductsCardItem from './ProductsCardItem'
import ProductsCardCarousel from '../../../components/carousel/ProductsCardCarousel'
import ColorBtn from '../../../components/uikit/ColorBtn'
import Button from '../../../components/button/Button'


const DATA = [
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

const data: any = [
    {
        id: 0,
        uri: 'https://seeddownload.cdn-apple.com/s3/prod/SEED/package/T043383A-en_AU/4.0/T043383A-iPhone14Pro-FL-AR_2_2/images/T043383A_desktop-hero-2136x1068.png',
        title: 'Dahlia',
    },
    {
        id: 1,
        uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841907',
        title: 'Dahlia',
    },
    {
        id: 2,
        uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841897',
        title: 'Dahlia',
    },
    {
        id: 3,
        uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662060528139',
        title: 'Dahlia',
    }
];

const StorageData = [
    {
        id: 0,
        tilele: '128 гб',
    },
    {
        id: 1,
        tilele: '216 гб',
    },
    {
        id: 2,
        tilele: '1 тб',
    }
];

const ColorsData = [
    {
        id: 0,
        color: COLORS.black,
    },
    {
        id: 1,
        color: COLORS.blue,
    },
    {
        id: 2,
        color: COLORS.btnColor,
    }
]

const ProductCard = () => {

    const navigation = useNavigation()
    const [selectBtnColor, setSelectBtnColor] = useState<number>(StorageData[0].id)
    const [selectColor, setSelectColor] = useState<number>(ColorsData[0].id)

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <TitleNavbar showArrow title='' onPress={() => navigation.goBack()} />
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.bgColor }} showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20 }}>
                    <ProductsCardCarousel data={data} />
                </View>
                <View style={styles.description}>
                    <View>
                        <FlatList
                            data={DATA}
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
                        }}>Экран....................................... 6.8</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.titlecolor
                        }}>Модель процессора............... Snapdragon 8 Gen 2</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.titlecolor
                        }}>Встроенная память................. 256 Гб</Text>
                        <TouchableOpacity style={{ alignSelf: "center", padding: 5 }}>
                            <Text style={{ color: COLORS.btnColor, textDecorationLine: 'underline' }}>Подробнее...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.storage}>
                        <Text style={styles.informationTitle}>Память</Text>
                        <FlatList
                            data={StorageData}
                            renderItem={({ item }) =>
                                <StorageBtn
                                    title={item.tilele}
                                    selectColor={selectBtnColor === item.id}
                                    onSelectColor={() => setSelectBtnColor(item.id)}
                                />}
                            horizontal
                            contentContainerStyle={{ gap: 5 }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.storage}>
                        <Text style={styles.informationTitle}>Цвет</Text>
                        {/* <ColorBtn color={COLORS.black} /> */}
                        <FlatList
                            data={ColorsData}
                            renderItem={({ item }) =>
                                <ColorBtn
                                    color={item.color}
                                    selectColor={selectColor === item.id}
                                    onSelectColor={() => setSelectColor(item.id)}
                                />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 7 }}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomPart}>
                <View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: COLORS.titlecolor
                    }}>
                        Стоимость
                    </Text>
                    <Text style={{
                        fontSize: 23,
                        fontWeight: '700',
                        color: COLORS.black,
                        paddingVertical: 5
                    }}>
                        13.000.000 сум
                    </Text>
                </View>
                <TouchableOpacity>
                    <MassageIcon />
                </TouchableOpacity>
                <Button text='В корзину' BasketIcon={true} onPress={() => navigation.navigate} />
            </View>
        </View>
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
        borderColor: COLORS.titlecolor,
        gap: 10
    },
    storage: {
        marginHorizontal: 20,
        paddingVertical: 16,
        textDecorationLine: "underline",
        borderBottomWidth: 1,
        borderColor: COLORS.titlecolor
    },
    bottomPart: {
        width: '55%',
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        paddingTop: 20
    }
})