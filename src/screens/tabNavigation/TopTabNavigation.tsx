import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../home/homeScreen/HomeScreen';
import ProductsScreen from '../home/Product/FactoriesScreen';
import { COLORS } from '../../constants/Color';
import FactoriesScreen from '../home/Product/FactoriesScreen';

const Tab = createMaterialTopTabNavigator();

const router = {
    product: {
        screenName: 'product',
        label: 'Продукты'
    },
    firme: {
        screenName: 'firme',
        label: 'Заводы'
    }
}

function MyTabBar({ state, descriptors, navigation }: any) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 30,
            paddingHorizontal: 10
        }}>
            {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
                const { options } = descriptors[route.key];
                const label: keyof typeof router =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            borderWidth: 1,
                            width: "50%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            paddingVertical: 10,
                            borderColor: isFocused ? COLORS.btnColor : COLORS.tabBtnColor
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            fontSize: 16,
                            color: isFocused ? COLORS.btnColor : COLORS.tabBtnColor
                        }}>{router[label].label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const TopTabNavigation = () => {
    return (
        <Tab.Navigator sceneContainerStyle={{ backgroundColor: COLORS.bgColor, }}
            tabBar={(props: any) => <MyTabBar {...props} />}>
            <Tab.Screen name={router.product.screenName} component={HomeScreen} />
            <Tab.Screen name={router.firme.screenName} component={FactoriesScreen} />
        </Tab.Navigator>
    )
}

export default TopTabNavigation

const styles = StyleSheet.create({

})