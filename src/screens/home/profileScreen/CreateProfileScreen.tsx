import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/Color'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import Button from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import { Ionicons } from '@expo/vector-icons';

const CreateProfileScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <View style={styles.container}>
            <TitleNavbar title='Профиль' />
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                width: 250,
                alignSelf: "center",
                gap: 30,
                paddingTop: 150
            }}>
                <View style={styles.profileBox}>
                    <Ionicons name="person-outline" size={70} color="white" />
                </View>
                <View style={styles.btnBox}>
                    <Button text='Регистрация' onPress={() => navigation.navigate('Lecince')} />
                </View>

            </View>
        </View>
    )
}

export default CreateProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        paddingHorizontal: 20,
    },
    profileBox: {
        width: 120,
        height: 120,
        backgroundColor: COLORS.btnColor,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBox: {
        width: "100%",
    }
})