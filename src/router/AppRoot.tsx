import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from '../screens/auth'
import { COLORS } from '../constants/Color'

const AppRoot = () => {
    return (
        <View style={styles.container}>
            <AuthStack />
        </View>
    )
}

export default AppRoot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor
    },
})