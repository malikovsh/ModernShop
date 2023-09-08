import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { BasketWhiteIcon } from '../../assets/icons/icons';

type Props = {
    text: string;
    onPress: () => void;
    isLoading?: boolean;
    BasketIcon?: boolean;
}

const Button = ({ text, onPress, isLoading, BasketIcon }: Props) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            {
                isLoading ? (
                    <ActivityIndicator size={30} color={'white'} />
                ) : (
                    <Text style={{
                        fontWeight: "700",
                        fontSize: 16,
                        color: COLORS.white,
                    }}> {text}</Text>
                )
            }
            {
                BasketIcon ? <BasketWhiteIcon /> : null
            }
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        width: '90%',
        height: 50,
        backgroundColor: COLORS.btnColor,
        borderRadius: 55,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLORS.btnColor,
        flexDirection: "row",
        gap: 10,
    }
})