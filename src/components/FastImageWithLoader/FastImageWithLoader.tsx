import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const FastImageWithLoader: React.FC<any> = props => {
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadEnd = () => {
        setIsLoading(false);
    };

    const handleLoadStart = () => {
        setIsLoading(true);
    };

    return (
        <View style={props.style}>
            <Image
                {...props}
                style={[props.style, isLoading && styles.loadingImage]}
                onLoadEnd={handleLoadEnd}
                onLoadStart={handleLoadStart}
                contentFit="cover"
                transition={1000}
                placeholder={blurhash}
            />

            {isLoading && (
                <View style={styles.loadingIndicator}>
                    <ActivityIndicator />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    loadingIndicator: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: "transparent",
        ...StyleSheet.absoluteFillObject,
    },
    loadingImage: {
        opacity: 0,
    },
});