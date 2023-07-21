import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ReturnKeyType, KeyboardType } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color';

type InputProps = {
    title: string;
    text?: string;
    icon?: React.ReactNode,
    value?: string
    onChange: (e: string) => void
    onChangetext?: Function,
    keyboardType?: KeyboardType
};

export default function InputText({ title, text, icon, onChange, value, keyboardType = 'default' }: InputProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.discription}>{title}</Text>
            <View style={styles.inputBtn}>
                {icon || null}
                <TextInput
                    keyboardType={keyboardType}
                    placeholder={text}
                    style={styles.inputText}
                    value={value}
                    onChangeText={(e) => onChange(e)} />
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