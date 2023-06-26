import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/Color'



const CounterBox = () => {
    const [state, SetState] = useState<number>(1)
    const counterHandler = (value: string) => {
        if (value === 'add') {
            SetState((a) => a + 1)
        }
        else {
            if (state > 1) {
                SetState((a) => a - 1)
            }
        }
    }


    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.btn} onPress={() => counterHandler('remov')}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: '700', fontSize: 14 }}>{state}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => counterHandler('add')}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CounterBox

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingRight: 15
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: COLORS.bgColor,
        borderRadius: 24,
    }
})