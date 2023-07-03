import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { useNavigation } from '@react-navigation/native'

const NewsCard = () => {

    const nanigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.bgImage}>
                <ImageBackground
                    source={require('./../../../assets/Images/NewsImage.png')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <View style={{ padding: 20, width: '100%', }}>
                        <TitleNavbar title='' showArrow colour={true} onPress={() => nanigation.goBack()} />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.description}>
                <Text style={styles.title}>Мы оказываем широкий спектр услуг.</Text>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
    },
    bgImage: {
        width: '100%',
        height: 290,
        alignSelf: "center",
        borderWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    description: {
        padding: 20,
        gap: 20
    },
    title: {
        fontSize: 19,
        fontWeight: "700",
        width: '90%'
    },
    text: {
        fontSize: 16,
        color: COLORS.titlecolor,
        lineHeight: 25
    }
})