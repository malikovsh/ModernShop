import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ExistIcon, FilterIcon } from '../../assets/icons/icons';
import { COLORS } from '../../constants/Color';

type TitleProps = {
    title: string;
    showArrow?: boolean;
    showFilter?: boolean;
    showExist?: boolean;
    onPress?: () => void;
}

const TitleNavbar = ({ title, showArrow, showFilter, showExist, onPress }: TitleProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                {
                    showArrow ?
                        <TouchableOpacity style={styles.btn} onPress={onPress}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity> : null
                }
                <Text style={styles.text}>{title}</Text>
            </View>
            {
                showFilter ?
                    <TouchableOpacity style={styles.btnFilter} onPress={onPress}>
                        <FilterIcon />
                    </TouchableOpacity> : null
            }
            <View>
                {
                    showExist ?
                        <TouchableOpacity style={styles.btnExist} onPress={onPress}>
                            <ExistIcon />
                            <Text style={styles.textExist}>Выйти</Text>
                        </TouchableOpacity> : null
                }
            </View>

        </View>
    )
}

export default TitleNavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 15
    },
    btn: {
        paddingVertical: 15,
        paddingRight: 15
    },
    btnFilter: {
        padding: 15,
        backgroundColor: COLORS.white,
        borderRadius: 20
    },
    btnExist: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 5
    },
    textExist: {
        fontWeight: "700",
        fontSize: 16,
        color: COLORS.titlecolor
    }
})