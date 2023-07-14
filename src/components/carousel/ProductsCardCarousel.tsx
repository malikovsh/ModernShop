import { Dimensions, FlatList, Pressable, StyleSheet, Animated, View } from 'react-native'
import React, { FC, useEffect, useRef, useState } from 'react'
import { COLORS } from '../../constants/Color';
import { Image } from 'react-native';
import { mediaUrl } from '../../api/api';

const { width } = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width - 40; // Item is a square. Therefore, its height and width are of the same length.
const EMPTY_ITEM_LENGTH = 0
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 0;

interface ProductsCardCarouselProps {
    data: any;
}

const ProductsCardCarousel: FC<ProductsCardCarouselProps> = ({ data }) => {


    const scrollX = useRef(new Animated.Value(0)).current;
    const [dataWithPlaceholders, setDataWithPlaceholders] = useState<
        any
    >([]);
    const currentIndex = useRef<number>(0);
    const flatListRef = useRef<FlatList<any>>(null);
    const [currentI, setCurrentI] = useState(0)

    useEffect(() => {
        setDataWithPlaceholders([{ id: -1 }, ...data, { id: data.length }]);
        currentIndex.current = 0;
    }, [data]);

    const ab = useRef(({ viewableItems }: any) => {

        if (viewableItems.length === 0) {
            currentIndex.current = 0,
                setCurrentI(0)
            return
        }

        currentIndex.current = viewableItems[0].index;
        setCurrentI(viewableItems[0].index)
    })

    const autoplayTimeout = 7000;
    const autoplayInterval = useRef<any>(null);

    useEffect(() => {
        const autoplay = () => {
            autoplayInterval.current = setInterval(() => {
                if (currentIndex.current === data.length)
                    currentIndex.current = 0;
                flatListRef.current?.scrollToOffset({
                    offset: currentIndex.current * ITEM_LENGTH,
                    animated: true,
                });
            }, autoplayTimeout);
        };

        autoplay();

        return () => {
            if (autoplayInterval.current) {
                clearInterval(autoplayInterval.current);
                autoplayInterval.current = null;
            }
        };
    }, [currentIndex]);


    const getItemLayout = (_data: any, index: number) => ({
        length: ITEM_LENGTH,
        offset: ITEM_LENGTH * (index - 1),
        index,
    });

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={dataWithPlaceholders}
                renderItem={({ item, index }) => {
                    if (!item.name || !item.fileId) {
                        return <View style={{ width: EMPTY_ITEM_LENGTH }} />;
                    }

                    const inputRange = [
                        (index - 2) * ITEM_LENGTH,
                        (index - 1) * ITEM_LENGTH,
                        index * ITEM_LENGTH,
                    ];

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [
                            CURRENT_ITEM_TRANSLATE_Y + 48,
                            CURRENT_ITEM_TRANSLATE_Y,
                            CURRENT_ITEM_TRANSLATE_Y + 48,
                        ],
                        // extrapolate: 'clamp',
                    });

                    return (
                        <View style={{ width: ITEM_LENGTH }}>
                            <Animated.View
                                style={[
                                    {
                                        transform: [{ translateY }],
                                    },
                                    styles.itemContent,
                                ]}>
                                <Image source={{ uri: mediaUrl + item.name }} style={styles.itemImage} />
                            </Animated.View>
                        </View>
                    );
                }}
                getItemLayout={getItemLayout}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                bounces={false}
                decelerationRate={0}
                renderToHardwareTextureAndroid
                contentContainerStyle={styles.flatListContent}
                snapToInterval={ITEM_LENGTH}
                snapToAlignment="start"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                scrollEventThrottle={16}
                onViewableItemsChanged={ab.current}
            />
        </View>
    )
}

export default ProductsCardCarousel

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginBottom: 15
    },
    arrowBtnText: {
        fontSize: 42,
        fontWeight: '600',
    },
    flatListContent: {
        height: 267,
        alignItems: 'center',
        marginBottom: CURRENT_ITEM_TRANSLATE_Y,
    },
    itemContent: {
        // marginHorizontal: SPACING * 3,
        marginRight: SPACING * 3,
        width: ITEM_LENGTH,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: BORDER_RADIUS + SPACING * 2,
    },
    itemImage: {
        width: '100%',
        height: 265,
        borderRadius: BORDER_RADIUS,
        resizeMode: 'cover',
    },
    paginationContainer: {
        height: 16,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 5
    },
    paginationItem: {
        width: 16,
        height: 16,
        borderRadius: 10,
        backgroundColor: "transparent",
        borderColor: COLORS.white,
        borderWidth: 2
    },
    activePaginationItem: {
        backgroundColor: COLORS.white
    }
})