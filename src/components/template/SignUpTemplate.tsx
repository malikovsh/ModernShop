import { Image, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaViewComponent, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ScrollView } from 'react-native'
import React from 'react'
import InputText from '../uikit/InputText'
import { COLORS } from '../../constants/Color'
import Button from '../button/Button'
import Constants from 'expo-constants';

type SignUpProps = {
    title: string;
    children: React.ReactNode;
}

const STATUSBAR_HEIGHT = Constants.statusBarHeight
const HIGHT = Dimensions.get('window').height

export default function SignUpTemplate(props: SignUpProps) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <View style={styles.image}>
                        <Image source={require("./../../assets/Images/Logo2.png")} style={{
                            width: 300,
                            height: 250
                        }} />
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={styles.title}>{props.title}</Text>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            paddingBottom: 50
                        }}>
                            {props.children}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: COLORS.bgColor
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: "700",
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 33,
    }
})