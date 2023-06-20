import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LookingTemplate from '../../../components/template/LookingTemplate'
import TopTabNavigation from '../../tabNavigation/TopTabNavigation'

const LookingScreen = () => {
    return (
        <View style={styles.container}>
            <LookingTemplate>
                <TopTabNavigation />
            </LookingTemplate>
        </View>
    )
}

export default LookingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})