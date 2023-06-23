import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type Props = {
    width?: number,
    height: number
}

const GapView = ({ width, height }: Props) => {
    return (
        <View style={{
            backgroundColor: 'transparent',
            width: width || '100%',
            height
        }} />
    )
}

export default GapView