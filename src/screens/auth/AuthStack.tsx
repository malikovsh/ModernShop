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
import NewProductsScreen from '../product/newProductScreen/NewProductsScreen';
import CategoriesScreen from '../product/categoriesScreen/CategoriesScreen';
import FamoseScreen from '../product/famouseScreen/FamoseScreen';
import NewsScreen from '../product/newsScreen/NewsScreen';
import ProductCard from '../product/productCard/ProductCard';
import NewsCard from '../product/newsCard/NewsCard';
import FilterScreen from '../product/filterScreen/FilterScreen';
import PhoneScreen from '../product/phoneScreen/PhoneScreen';
import PresonalDataScreen from './personalData/PresonalDataScreen';
import EditScreen from './editScreen/EditScreen';
import NewEditPassword from './personalData/NewEditPassword';
import NewCreatePassword from './NewCreatePassword/NewCreatePassword';

type ScreenNames = [
    'Lecince',
    'SignUp',
    'Restore',
    'NewPassword',
    'BottomTab',
    'Home',
    'NewProducts',
    'Categories',
    'Famouse',
    'News',
    'ProductCard',
    'NewsCard',
    'Filter',
    'Phone',
    'Personal',
    'Edit',
    'NewEdit',
    'CreatePassword'
];
type RootStackParamList = Record<ScreenNames[number], undefined>
export type StackNavigationType = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator();


export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Lecince" component={LicenceScreen} />
                <Stack.Screen name="SignUp" component={RegisterScreen} />
                <Stack.Screen name="Restore" component={RestoreScreen} />
                <Stack.Screen name="NewPassword" component={NewPaswordScreen} />
                <Stack.Screen name="CreatePassword" component={NewCreatePassword} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="NewProducts" component={NewProductsScreen} />
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="Famouse" component={FamoseScreen} />
                <Stack.Screen name="News" component={NewsScreen} />
                <Stack.Screen name="ProductCard" component={ProductCard} />
                <Stack.Screen name="NewsCard" component={NewsCard} />
                <Stack.Screen name="Filter" component={FilterScreen} />
                <Stack.Screen name="Phone" component={PhoneScreen} />
                <Stack.Screen name="Personal" component={PresonalDataScreen} />
                <Stack.Screen name="Edit" component={EditScreen} />
                <Stack.Screen name="NewEdit" component={NewEditPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({})