import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'

type ChatProps = {
    user: string,
    onPress: () => void,
    isFocused?: boolean
}

const ChatBox = ({ user, onPress, isFocused }: ChatProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imgProfile}>
                <Image source={require('./../../assets/Images/profileImage.png')} />
            </View>
            <View>
                <Text style={styles.user}>{user}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatBox

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.bgColor,
        borderRadius: 20,
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 23,
        gap: 15,
        alignItems: 'center'
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    user: {
        fontSize: 17,
        fontWeight: '700',
        paddingVertical: 5
    },
})