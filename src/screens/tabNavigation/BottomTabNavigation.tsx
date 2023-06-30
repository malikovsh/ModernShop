import { StyleSheet, Text, View, TouchableOpacity, Platform, Dimensions, Keyboard } from 'react-native'
import React from 'react'
import BasketScreen from '../home/bascetScreen/BasketScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BasketIcon, ChatIcon, HeartIcon, HomeIcon, ProfileIcon } from '../../assets/icons/icons';
import { COLORS } from '../../constants/Color';
import FavoriteScreen from '../home/favoriteScreen/FavoriteScreen';
import ChatScreen from '../home/chatSreen/ChatScreen';
import ProfileScreen from '../home/profileScreen/ProfileScreen';
import LookingScreen from '../home/lookingScreen/LookingScreen';
import CreateProfileScreen from '../home/profileScreen/CreateProfileScreen';

const Tab = createBottomTabNavigator();

const tabBarData = [
    {
        label: 'home',
        icon: HomeIcon
    },
    {
        label: 'basket',
        icon: BasketIcon
    },
    {
        label: 'favorite',
        icon: HeartIcon
    },
    {
        label: 'chat',
        icon: ChatIcon
    },
    {
        label: 'profile',
        icon: ProfileIcon
    }
]

const NavigationIcon = ({ label, isFocused }: { label: string, isFocused: boolean }) => {

    const Icon = tabBarData.find(tabBar => tabBar.label === label) || {
        label: 'icon',
        icon: HomeIcon
    }

    return (
        <Icon.icon isFocused={isFocused} />
    )
};

function MyTabBar({ state, descriptors, navigation }: any) {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            justifyContent: 'space-around',
            paddingHorizontal: 40,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingBottom: Platform.OS === 'ios' ? 20 : 10,
            paddingTop: 10
        }}>
            {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
                const { options } = descriptors[route.key];
                const label =
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
                            padding: 15
                        }}
                    >
                        <NavigationIcon label={label} isFocused={isFocused} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator sceneContainerStyle={{ backgroundColor: COLORS.bgColor }}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}
            tabBar={(props: any) => <MyTabBar {...props} />}>
            <Tab.Screen name={tabBarData[0].label} component={LookingScreen} />
            <Tab.Screen name={tabBarData[1].label} component={BasketScreen} />
            <Tab.Screen name={tabBarData[2].label} component={FavoriteScreen} />
            <Tab.Screen name={tabBarData[3].label} component={ChatScreen} />
            <Tab.Screen name={tabBarData[4].label} component={CreateProfileScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})