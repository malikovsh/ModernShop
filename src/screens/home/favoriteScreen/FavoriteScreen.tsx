import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import NewProductsItem, { CATALOG_CARD_WIDTH } from '../../../components/newProdut/NewProductsItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import LottieView from 'lottie-react-native';


const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2


const FavoriteScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { inFavouriteProducts } = useRootStore().favouriteStore

    const EmptyListMessage = () => {

        const animation = useRef(null);

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    source={require('../../../assets/Animat.json')}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TitleNavbar title='Избранное' />
            {
                inFavouriteProducts.length === 0 ?
                    <EmptyListMessage /> :
                    <FlatList
                        data={inFavouriteProducts}
                        renderItem={({ item }) => <NewProductsItem
                            data={item}
                            onPress={() => navigation.navigate('ProductCard')} />}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        columnWrapperStyle={{
                            columnGap: COLUMN_GAP
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
            }
        </View>
    )
}

export default observer(FavoriteScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }
})