import { Dimensions, FlatList, Image, Platform, SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { mediaUrl } from '../../api/api'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Madia } from '../../api/requestType'

const { width, height } = Dimensions.get('screen')

const ImagePill = (props: { src: string, width?: number, height?: number }) => {
    return <Image
        source={{
            uri: mediaUrl + props.src
        }}
        resizeMode="stretch"
        style={{
            width: props.width ? props.width : width - 40,
            height: props.height ? props.height : height * 0.4,
            borderRadius: 8,
        }} />
}

const FlatListItemSeparator = () => {
    return (
        //Item Separator
        <View style={{ margin: 9, paddingRight: 22 }} />
    );
};

const ProductsCardCarousel = ({ data }: { data: Madia[] }) => {
    const [index, setIndex] = useState(0);

    return (
        <View>
            <View style={{ paddingBottom: 20 }}>
                <ImagePill src={data[index]?.name} />
            </View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 12 }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setIndex(index)}>
                            <ImagePill width={101} height={97} src={item?.name} />
                        </TouchableOpacity>
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 10
                }}
            />
            {/* <SectionList
                horizontal={true}
                ItemSeparatorComponent={FlatListItemSeparator}
                sections={[
                    { title: '', data: data },
                ]}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 12 }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setIndex(index)}>
                            <ImagePill width={101} height={97} src={item?.name} />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                stickySectionHeadersEnabled={Platform.OS === 'ios' ? false : true}
            /> */}
        </View>
    )
}

export default ProductsCardCarousel

const styles = StyleSheet.create({
    container: {

    }
})