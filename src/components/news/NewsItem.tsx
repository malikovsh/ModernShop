import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type NewsProps = {
    title: string,
    description: string,
    onPress: () => void
}

const NewsItem = ({ title, description, onPress }: NewsProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ImageBackground
                source={require('./../../assets/Images/imgBg.png')}
                style={styles.bgImg}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {description}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 215,
        borderRadius: 20,
        marginTop: 13,
    },
    bgImg: {
        width: 174,
        height: 225,
        paddingHorizontal: 11,
        gap: 8,
        justifyContent: "flex-end",
        paddingBottom: 16
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.white,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.textColor,
    }
})