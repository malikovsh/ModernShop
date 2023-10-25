import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../HomeStack'
import { Vendor, VendorProductType } from '../../../store/VendorSrorage/VendorScreenType'
import { observer } from 'mobx-react-lite'
import useRootStore from '../../../hooks/useRootStore'
import { mediaUrl } from '../../../api/api'

type FactoryProp = {
    data: Vendor,
}

const FactoryCard = ({ data }: FactoryProp) => {

    const navigation = useNavigation<StackNavigationType>()
    const { createNewChat } = useRootStore().chatStore
    const { setGetAllVendors, getAllVendorProduct, allVendorProduct } = useRootStore().vendoreStoage

    const onHandleChat = async () => {
        await createNewChat(data.admin.id)
        navigation.navigate('Writing')
    }

    const handlePress = () => {
        getAllVendorProduct(data.id)
        setGetAllVendors(allVendorProduct)
        navigation.navigate('Products')
    }


    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }} source={{ uri: mediaUrl + allVendorProduct.baner?.name }} />
                <Text style={{
                    fontWeight: '700',
                    fontSize: 17,
                    width: '70%',
                    lineHeight: 28,
                }}>{data.name}</Text>
            </View>
            <View >
                <Text style={styles.title}>Описание</Text>
                <Text style={styles.description}>{allVendorProduct.description}</Text>
                <TouchableOpacity style={{
                    paddingVertical: 5,
                    width: '35%',
                    borderBottomWidth: 1,
                    borderColor: COLORS.btnColor
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "400",
                        lineHeight: 23,
                        color: COLORS.btnColor,
                    }}>{data.contacts?.phoneNumber}</Text>
                </TouchableOpacity>
            </View>
            <Button text='Посмотреть товары' onPress={handlePress} />
            <Button text='Связаться' onPress={onHandleChat} />
        </View>
    )
}

export default observer(FactoryCard)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 20,
        gap: 20
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        paddingBottom: 7
    },
    description: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 23
    }
})