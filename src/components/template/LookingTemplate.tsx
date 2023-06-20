import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type LookingProps = {
    children: React.ReactNode
}

const LookingTemplate = ({ children }: LookingProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Вы смотрите:</Text>
            {children}
        </View>
    )
}

export default LookingTemplate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        paddingHorizontal: 20
    },
    title: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 20,
        paddingVertical: 15
    }
})