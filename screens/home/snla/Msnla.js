import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headertop from '../../../components/Headertop'
import OtherHouse from '../../../assets/images/other_house.png'

const Msnla = ({ navigation, route }) => {

    const romes = [{ name: '101', people: 1, status: false, cost: '0' },
    { name: '102', people: 1, status: false, cost: '0' }
    ]

    useEffect(() => {
        if (route?.params?.cost && route?.params?.cost != '0') {
            setDs([{ name: '101', people: 1, status: true, cost: '6.245.000' },
            { name: '102', people: 1, status: false, cost: '0' }
            ])
        }
    }, [route?.params?.name])

    const [ds, setDs] = useState(romes)

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
                    }}>Chốt hóa đơn</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Nhà số 2
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                {ds.map((value, index) => {
                    return <Pressable key={index} onPress={() => {
                        navigation.push('csnla', {
                            name: value.name
                        })
                    }}>
                        <View style={styles.dsdv} >
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontSize: 20 }}>{value.name}</Text>
                                <Text style={{ fontSize: 12 }}>
                                    Tổng: {value.cost == '0' ? <Text>{value.cost}</Text> : <Text style={{ color: 'blue' }}>{value.cost}</Text>}
                                </Text>
                            </View>
                            <View>
                                {value.status ? <Text style={{ fontSize: 16, color: 'green' }}>Đã chốt</Text> :
                                    <Text style={{ fontSize: 16, color: 'red' }}>Chưa chốt</Text>}
                                <Text style={{ fontSize: 12 }}>{value.people} khách</Text>
                            </View>
                        </View>
                    </Pressable>
                })}
            </View>
        </View>
    )
}

export default Msnla

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    dsdv: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'flex-start'
    },
})