import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from '../screens/auth/AuthStack'
import { COLORS } from '../constants/Color'
import HomeStack from '../screens/home/HomeStack'
import { observer } from 'mobx-react-lite'
import useRootStore from '../hooks/useRootStore'

const AppRoot = () => {

    // const { token } = useRootStore().tokenStore

    return (
        <View style={styles.container}>
            <HomeStack />
        </View>
    )
}

export default observer(AppRoot)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor
    },
})