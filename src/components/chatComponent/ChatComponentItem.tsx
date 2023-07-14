import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { DateIcon } from '../../assets/icons/icons'
import { autoAction } from 'mobx/dist/internal'

const ChatComponentItem = () => {
    return (
        <View style={styles.container}>
            <View style={{
                width: '65%',
            }}>
                <View style={styles.chatItem}>
                    <Text style={styles.title}>Здравствуйте. Мне нужна ваша помощь.</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "flex-end"
                }}>
                    <DateIcon />
                    <Text style={{
                        color: COLORS.titlecolor,
                        paddingHorizontal: 5,
                        paddingVertical: 5
                    }}>
                        2023-01-13, 15:00
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ChatComponentItem

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        alignItems: "flex-end",
    },
    chatItem: {
        alignSelf: 'flex-end',
        paddingVertical: 19,
        paddingRight: 37,
        paddingLeft: 18,
        backgroundColor: COLORS.btnColor,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 10,
    },
    title: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        paddingRight: 10
    }
})