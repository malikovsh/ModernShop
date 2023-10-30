import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../../constants/Color'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../HomeStack'
import { Vendor, VendorProductType } from '../../../store/VendorSrorage/VendorScreenType'
import { observer } from 'mobx-react-lite'
import useRootStore from '../../../hooks/useRootStore'
import requests, { mediaUrl } from '../../../api/api'
import { toJS } from 'mobx'

type FactoryProp = {
    data: Vendor,
}

const FactoryCard = ({ data }: FactoryProp) => {

    const navigation = useNavigation<StackNavigationType>()
    const { createNewChat } = useRootStore().chatStore
    const { token } = useRootStore().tokenStore
    const { setGetAllVendors, getAllVendorProduct, allVendorProduct, getOneVendor } = useRootStore().vendoreStoage
    const [vendor, setVendor] = useState<VendorProductType>()

    const onHandleChat = async () => {
        await createNewChat(data.admin.id)
        token ? navigation.navigate('Writing') : navigation.navigate("Create")
    }

    const handlePress = () => {
        getAllVendorProduct(data.id)
        setGetAllVendors(allVendorProduct)
        navigation.navigate('Products')
    }

    const vendorFetch = async () => {
        if (data) {
            const respons = await requests.vendor.getAllVendorProduct(data.id)
            setVendor(respons.data as unknown as VendorProductType)
        }
    }

    useEffect(() => {
        vendorFetch()
    }, [data])

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }} source={{ uri: mediaUrl + vendor?.baner.name }} />
                <Text style={{
                    fontWeight: '700',
                    fontSize: 17,
                    width: '70%',
                    lineHeight: 28,
                }}>{vendor?.name}</Text>
            </View>
            <View >
                <Text style={styles.title}>Описание</Text>
                <Text style={styles.description}>{vendor?.description}</Text>
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
                    }}>{vendor?.contacts?.phoneNumber}</Text>
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