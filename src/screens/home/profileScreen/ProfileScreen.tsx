import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TitleNavbar from '../../../components/uikit/TitleNavbar'
import { EditIcon } from '../../../assets/icons/icons'
import { COLORS } from '../../../constants/Color'
import ProfileBtn from '../../../components/uikit/ProfileBtn'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationType } from '../../auth/AuthStack'
import useRootStore from '../../../hooks/useRootStore'
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {

    const navigation = useNavigation<StackNavigationType>()
    const { logout } = useRootStore().loginStore
    const [image, setImage] = useState<string | null>(null);


    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if (!result.canceled && !result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View style={styles.container}>
            <TitleNavbar title='Профиль' showExist onPress={() => logout()} />
            <View style={styles.profileBox}>
                <View style={styles.profile} >
                    <Image
                        style={{ width: 180, height: 180, borderRadius: 100 }}
                        source={{ uri: image || 'https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg' }} />
                    <TouchableOpacity style={styles.editBtn} onPress={PickImage}>
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