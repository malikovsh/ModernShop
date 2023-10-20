import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ReturnKeyType, KeyboardType } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type InputProps = {
    title: string;
    text?: string;
    icon?: React.ReactNode,
    value?: string
    onChange: (e: string) => void
    onChangetext?: Function,
    keyboardType?: KeyboardType,
    showEye?: boolean
};

export default function InputText({ title, text, icon, onChange, value, keyboardType = 'default', showEye = false }: InputProps) {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.discription}>{title}</Text>
            <View style={styles.inputBtn}>
                {icon || null}
                <TextInput
                    secureTextEntry={showEye && !showPassword}
                    keyboardType={keyboardType}
                    placeholder={text}
                    style={styles.inputText}
                    value={value}
                    onChangeText={(e) => onChange(e)
                    } />
                {
                    showEye && <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        onPress={toggleShowPassword}
                    />
                }
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
        paddingHorizontal: 20,
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
    },
})