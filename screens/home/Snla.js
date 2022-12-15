import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Msnla from './snla/Msnla';
import Csnla from './snla/Csnla';

const Stack = createNativeStackNavigator()

const Snla = () => {
    return (
        <Stack.Navigator initialRouteName="msnla" screenOptions={{ headerShown: false }} >
            <Stack.Screen name='msnla' component={Msnla} />
            <Stack.Screen name='csnla' component={Csnla} />
        </Stack.Navigator>
    )
}

export default Snla

const styles = StyleSheet.create({

})