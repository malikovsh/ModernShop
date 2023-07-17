import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color';

type InputProps = {
    title: string;
    text?: string;
    onChangetext(value: string): void;
    value?: string;
};

export default function EditProfileText({ title, text, onChangetext, value }: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.discription}>{title}</Text>
            <View style={styles.inputBtn}>
                <TextInput
                    placeholder={text}
                    style={styles.inputText}
                    value={value}
                    onChangeText={(value) => onChangetext(value)} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        gap: 10,
        color: "#FAF8F8"
    },
    discription: {
        fontWeight: "400",
        fontSize: 16,
        color: COLORS.titlecolor,
        paddingLeft: 20
    },
    inputBtn: {
        flexDirection: "row",
        columnGap: 15,
        width: "90%",
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 50,
        paddingLeft: 20,
        alignItems: "center",
        alignSelf: "center",
    },
    inputText: {
        flex: 1,
        fontWeight: "400",
        fontSize: 17,
        height: '100%',
        color: COLORS.titlecolor,
        paddingRight: 10,
        backgroundColor: 'transparent',
    }
})