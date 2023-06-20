import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const image = require('./../../../assets/Images/logo.png')

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.bgimg} >
                <Image source={require("../../../assets/Images/modern1.png")} style={styles.image} />
            </ImageBackground>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgimg: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    image: {
        position: 'absolute',
        bottom: 335,
    }
})