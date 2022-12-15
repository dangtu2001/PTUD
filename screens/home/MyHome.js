import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Headertop from '../../components/Headertop'
import OtherHouse from '../../assets/images/other_house.png';


const MyHome = ({ navigation, route }) => {
    return (
        <View>
            <Headertop />
            <View style={styles.header}>

                <Image source={OtherHouse} style={{ marginLeft: 10 }} />
                <View style={{
                    marginLeft: 20,
                    width: '60%'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Trang chính</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Nhà số 2
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default MyHome

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})