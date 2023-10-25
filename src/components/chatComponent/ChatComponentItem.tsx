import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Color'
import { DateIcon } from '../../assets/icons/icons'

type ChatType = {
    text: any,
    date: any,
    position?: boolean
}

const ChatComponentItem = ({ text, date, position }: ChatType) => {
    return (
        <View style={styles.container}>
            <View style={[styles.chatItem, {
                alignSelf: position ? 'flex-end' : 'flex-start',
                borderBottomLeftRadius: position ? 20 : 0,
                borderBottomRightRadius: position ? 0 : 20,
                backgroundColor: position ? COLORS.btnColor : '#179AE4'
            }]}>
                <Text style={styles.title}>{text}</Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: position ? 'flex-end' : 'flex-start'
            }}>
                <DateIcon />
                <Text style={{
                    color: COLORS.titlecolor,
                    paddingHorizontal: 5,
                    paddingVertical: 5
                }}>
                    {new Date(date).toDateString()}
                </Text>
            </View>
        </View>
    )
}

export default ChatComponentItem

const styles = StyleSheet.create({
    container: {
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
    }
})