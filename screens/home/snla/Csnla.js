import { StyleSheet, Text, View, Image, Pressable, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Headertop from '../../../components/Headertop'
import ArrowBack from '../../../assets/images/arrow_back.png'
import Mbill from '../../../assets/images/bill.png'

const Csnla = ({ navigation, route }) => {
    return (
        <View style={{ height: '100%' }}>
            <Headertop />
            <View style={styles.header}>
                <Pressable onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={ArrowBack} style={{ marginLeft: 10 }} />
                </Pressable>
                <View style={{
                    marginLeft: 20,
                    width: '60%'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Chốt hóa đơn</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Phòng {route?.params?.name}
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image source={Mbill} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <Text style={{ fontSize: 16 }}>Tổng cộng</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>6.245.000</Text>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('msnla', {
                    name: route?.params?.name,
                    cost: '6.245.000'
                })
            }}>
                <View style={styles.buttonBottom}>
                    <Text style={styles.textIn}>Chốt hóa đơn</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Csnla

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
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