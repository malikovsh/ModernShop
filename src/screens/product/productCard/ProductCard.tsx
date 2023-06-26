import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import CategriesItem from '../../../components/categories/CategriesItem'
import { useNavigation } from '@react-navigation/native'
import { FavoriteIcon } from '../../../assets/icons/icons'
import StorageBtn from '../../../components/uikit/StorageBtn'

const DATA = [
    1, 2, 3, 4, 5
]

const ProductCard = () => {

    const navigation = useNavigation()

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <TitleNavbar showArrow title='' />
                </View>
                <View style={styles.carousel}>

                </View>
                <View style={styles.description}>
                    <View>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <CategriesItem title='' onPress={() => navigation.navigate} />}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
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
    carousel: {
        width: 226,
        height: 256,
        borderWidth: 1,
        alignSelf: "center",
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