import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from '../screens/auth/AuthStack'
import { COLORS } from '../constants/Color'
import { observer } from 'mobx-react-lite'

const AppRoot = () => {

    // const { token } = useRootStore().tokenStore

    return (
        <View style={styles.container}>
            <AuthStack />
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