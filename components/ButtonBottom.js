import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const ButtonBottom = ({ textIn }) => {
    return (
        <View style={styles.buttonBottom}>
            <Text style={styles.textIn}>{textIn}</Text>
        </View>
    )
}

export default ButtonBottom

const styles = StyleSheet.create({
    buttonBottom: {
        backgroundColor: '#004CAD',
        padding: 15,
        alignItems: 'center',
        width: '100%',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    textIn: {
        fontSize: 20,
        color: '#fff',
    }
})