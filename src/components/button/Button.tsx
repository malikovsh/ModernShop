import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type Props = {
    text: string;
    onPress: () => void;
    isLoading?: boolean
}

export default function Button(props: Props) {
    return (
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            {
                props.isLoading ? (
                    <ActivityIndicator size={30} color={'white'} />
                ) : (
                    <Text style={{
                        fontWeight: "700",
                        fontSize: 16,
                        color: COLORS.white,
                    }}>{props.text}</Text>
                )
            }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn: {
        width: '90%',
        height: 50,
        backgroundColor: COLORS.btnColor,
        borderRadius: 55,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    }
})