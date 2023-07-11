import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { FavoriteIcon } from '../../assets/icons/icons'
import { ProductType } from '../../api/requestType'
import { mediaUrl } from '../../api/api'
import { observer } from 'mobx-react-lite'
import useRootStore from '../../hooks/useRootStore'

type NewProductsProps = {
    data: ProductType,
    showFamouse?: boolean;
    onPress?: () => void;
}

export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 184 : 164

const NewProductsItem = ({ data, showFamouse, onPress }: NewProductsProps) => {

    const { togleFavourite } = useRootStore().favouriteStore

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <TouchableOpacity style={styles.favriteBtn} onPress={() => togleFavourite(data)}>
                <FavoriteIcon isFocus={data.isFavourite} />
            </TouchableOpacity>
            <Image style={{
                width: '100%',
                height: 130,
                borderRadius: 20
            }} source={{ uri: mediaUrl + data?.media[0]?.name }} />
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={styles.productName}>{data?.name}</Text>
                    <Text style={styles.category}>{data?.subcategory?.name}</Text>
                </View>
                <Text style={styles.productPrice}>{data?.price[0]?.price + ' сум'}</Text>
            </View>
            {
                showFamouse ?
                    <View style={styles.famouse}>
                        <Text style={{ fontWeight: '700', fontSize: 14, color: COLORS.white }}>Популярное</Text>
                    </View> : null
            }
        </TouchableOpacity>
    )
}

export default observer(NewProductsItem)

const styles = StyleSheet.create({
    container: {
        width: CATALOG_CARD_WIDTH,
        height: 250,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        marginTop: 20,
        padding: 10,
    },
    productName: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.black,
        paddingTop: 10,
    },
    category: {
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.titlecolor,
        paddingTop: 3,
    },
    productPrice: {
        fontWeight: '700',
        fontSize: 17,
        color: COLORS.btnColor,
        lineHeight: 17
    },
    favriteBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 2,
    },
    famouse: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 30,
        backgroundColor: COLORS.famouseColor,
        top: '-5%',
        left: 0
    }
})