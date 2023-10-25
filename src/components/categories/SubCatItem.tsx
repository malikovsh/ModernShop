import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { CatigoriesType, ProductType } from '../../api/requestType'
import { mediaUrl } from '../../api/api'
import { observer } from 'mobx-react-lite'
import useRootStore from '../../hooks/useRootStore'
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    data: CatigoriesType,
    onPress: () => void,
    title?: string,
    image?: any
}


const SubCatigory = ({ onPress, data }: Props) => {

    const { getSubCatigoryById } = useRootStore().catigoryStore

    const handlePress = () => {
        getSubCatigoryById(data.id)
        onPress && onPress()
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={{
                width: "100%",
                height: 40,
                alignItems: 'center',
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between"
            }}>
                <Text style={styles.text}>{data?.name}</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color={COLORS.titlecolor} />
            </View>
        </TouchableOpacity>
    )
}

export default observer(SubCatigory)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        gap: 10,
        width: "100%",
        marginTop: 13,

    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.titlecolor,
        paddingVertical: 10
    },
})