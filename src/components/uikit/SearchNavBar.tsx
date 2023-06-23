import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FilterIcon, SearchIcon } from '../../assets/icons/icons'
import { COLORS } from '../../constants/Color'
import { TouchableOpacity } from 'react-native-gesture-handler'

type SearchPops = {
    onPress: () => void;
}

const SearchNavBar = ({ onPress }: SearchPops) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <TextInput style={styles.textInput} placeholder='Поиск' />
                <TouchableOpacity style={{ padding: 10 }}>
                    <SearchIcon />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filterBox} onPress={onPress}>
                <FilterIcon />
            </TouchableOpacity>
        </View>
    )
}

export default SearchNavBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 17
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        paddingHorizontal: 18,
        borderRadius: 20,
        width: "80%",
        alignItems: "center",
    },
    textInput: {
        width: "90%",
        fontWeight: '400',
        fontSize: 17,
        height: "100%",
        paddingVertical: 17,
        color: COLORS.titlecolor
    },
    filterBox: {
        padding: 17,
        backgroundColor: COLORS.white,
        borderRadius: 20
    }
})