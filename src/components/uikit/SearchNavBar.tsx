import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/Color'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

type SearchPops = {
    onPress?: () => void;
}

const SearchNavBar = () => {

    const [focus, setFocus] = useState(false)

    return (
        <View style={styles.box}>
            <View style={styles.container}>
                <MaterialIcons name="search" size={24} color={COLORS.titlecolor} />
                <TextInput
                    onFocus={() => setFocus(true)}
                    style={styles.input}
                    placeholder="Поиск..."
                    placeholderTextColor='#B4B8B9' />
                <Pressable style={styles.xButton}>
                    <Feather name="x" size={16} color={COLORS.titlecolor} />
                </Pressable>
            </View>
            {
                focus ? <Pressable style={styles.cancel} onPress={() => {
                    setFocus(false)
                    Keyboard.dismiss()
                }}>
                    <Text style={styles.cancelText}>Yopish</Text>
                </Pressable> : null
            }
        </View>
    )
}

export default SearchNavBar

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 43,
        width: "100%",
        marginTop: 20
    },
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 14,
        paddingLeft: 3,
        color: COLORS.titlecolor,
        backgroundColor: 'transparent',
        height: '100%',
    },
    xButton: {
        width: 20,
        height: 20,
        marginLeft: 5,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancel: {
        paddingLeft: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelText: {
        fontSize: 14,
        color: COLORS.btnColor,
    }
})