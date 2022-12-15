import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mbill from './bill/Mbill';
import Cbill from './bill/Cbill';

const Stack = createNativeStackNavigator()


const Bill = () => {
    return (
        <Stack.Navigator initialRouteName="mbill" screenOptions={{ headerShown: false }} >
            <Stack.Screen name='mbill' component={Mbill} />
            <Stack.Screen name='cbill' component={Cbill} />
        </Stack.Navigator>
    )
}

export default Bill

const styles = StyleSheet.create({})