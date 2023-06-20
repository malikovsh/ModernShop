import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{
                flex: 1,
            }}>
                <Text>HomeScreen</Text>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})