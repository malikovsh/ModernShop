import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import LicenceScreen from './licence/LicenceScreen';
import RegisterScreen from './register/RegisterScreen';
import RestoreScreen from './restore/RestoreScreen';
import NewPaswordScreen from './newPassword/NewPaswordScreen';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from '../tabNavigation/BottomTabNavigation';

type ScreenNames = ['Lecince', 'SignUp', 'Restore', 'NewPassword', 'BottomTab'];
type RootStackParamList = Record<ScreenNames[number], undefined>
export type StackNavigationType = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator();


export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Lecince" component={LicenceScreen} />
                <Stack.Screen name="SignUp" component={RegisterScreen} />
                <Stack.Screen name="Restore" component={RestoreScreen} />
                <Stack.Screen name="NewPassword" component={NewPaswordScreen} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({})