import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { OrderIcon, ProfileIcon2 } from '../../assets/icons/icons'

type ProfileProps = {
    showIcon?: boolean;
    showIcon2?: boolean;
    title: string;
    onPress: () => void;
}

const ProfileBtn = ({ showIcon, title, showIcon2, onPress }: ProfileProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {
                showIcon ?
                    <ProfileIcon2 />
                    : null
            }
            {
                showIcon2 ?
                    <OrderIcon />
                    : null
            }
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ProfileBtn

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    title: {
        fontWeight: "700",
        fontSize: 16,
        color: COLORS.titlecolor
    }
})