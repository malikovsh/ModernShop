import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewsCard = () => {
    return (
        <View style={styles.container}>
            <Text>NewsCard</Text>
        </View>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})