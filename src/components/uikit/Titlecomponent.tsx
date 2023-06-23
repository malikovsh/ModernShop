import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type TitleProps = {
    title: string;
    textBtn: string;
    onPress: () => void;
}

const TitleComponent = ({ title, textBtn, onPress }: TitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
                <Text style={styles.textBtn}>{textBtn}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TitleComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    textBtn: {
        color: COLORS.btnColor,
        fontWeight: '500',
        fontSize: 16
    }
})