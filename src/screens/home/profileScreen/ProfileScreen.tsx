import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { EditIcon } from '../../../assets/icons/icons'
import { COLORS } from '../../../constants/Color'
import ProfileBtn from '../../../components/uikit/ProfileBtn'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'

const ProfileScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { logout } = useRootStore().loginStore

    return (
        <View style={styles.container}>
            <TitleNavbar title='Профиль' showExist onPress={() => logout()} />
            <View style={styles.profileBox}>
                <View style={styles.profile} >
                    <Image style={{ width: 180, height: 180, borderRadius: 100 }}
                        source={require('./../../../assets/Images/Profile.png')} />
                    <TouchableOpacity style={styles.editBtn}>
                        <EditIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ gap: 10 }}>
                <ProfileBtn title='Личные данные' showIcon onPress={() => navigation.navigate('Personal')} />
                <ProfileBtn title='Мои заказы' showIcon2 onPress={() => navigation.navigate} />
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        gap: 41
    },
    profileBox: {
        alignItems: 'center',
    },
    profile: {
        width: 180,
    },
    editBtn: {
        width: 73,
        height: 73,
        borderRadius: 73,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.btnColor,
        position: "absolute",
        bottom: "-10%",
        right: "-10%",
    }
})