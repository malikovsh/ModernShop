import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../HomeStack'

const FactoryCard = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }} source={require('./../../../assets/Images/profileImage.png')} />
                <Text style={{
                    fontWeight: '700',
                    fontSize: 17,
                    width: '70%',
                    lineHeight: 28,
                }}>Shenzhen Qingmai Bicycle Co., Ltd.</Text>
            </View>
            <View >
                <Text style={styles.title}>Описание</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                <TouchableOpacity style={{
                    paddingVertical: 5,
                    width: '28%',
                    borderBottomWidth: 1,
                    borderColor: COLORS.btnColor
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "400",
                        lineHeight: 23,
                        color: COLORS.btnColor,
                    }}>Подробнее...</Text>
                </TouchableOpacity>
            </View>
            <Button text='Посмотреть товары' onPress={() => navigation.navigate('Products')} />
            <Button text='Связаться' onPress={() => navigation.navigate} />
        </View>
    )
}

export default FactoryCard

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