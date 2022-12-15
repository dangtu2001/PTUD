import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Headertop from '../../components/Headertop'

const Person = ({ navigation }) => {
    return (
        <View>
            <Headertop />
            <View style={styles.header}>
                <Text style={{ fontSize: 20, color: '#fff', marginLeft: 20 }}>Cá nhân</Text>
            </View>
            <Pressable onPress={() => {
                navigation.navigate('login')
            }}>
                <View style={styles.logout}>
                    <Text style={{ fontSize: 16, color: 'red' }}>Đăng Xuất</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Person

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    logout: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 300,
        borderWidth: 1,
        borderColor: 'red'
    }
})