import { View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headertop from '../../components/Headertop'
import Noti from '../../assets/images/notifications.png'
import Logout from '../../assets/images/logout.png'
import OtherHouse from '../../assets/images/other_houses.png'

const ListHome = ({ navigation, route }) => {

    const [listHome, setListHome] = useState([{ name: 'Nhà số 1', address: '248 xvnt, phường 26, quận Bình Thạnh, thành phố HCM' }])

    useEffect(() => {
        if (route.params?.name) {
            setListHome([{ name: 'Nhà số 1', address: '248 xvnt, phường 26, quận Bình Thạnh, thành phố HCM' },
            { name: route.params.name, address: route.params.address }])
        }
    }, [route.params?.name])
    return (
        <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <Headertop />
            <View style={styles.header}>
                <Text style={{
                    color: 'white',
                    fontSize: 21,
                    marginLeft: 20
                }}>Nhà của bạn</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                    <Image source={Noti} style={{ marginRight: 30 }} />
                    <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate('login')
                    }}>
                        <Image source={Logout} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    {listHome.map((value, index) => {
                        return <Pressable onPress={() => {
                            navigation.navigate('home', {
                                name: value.name
                            })
                        }} key={index}>
                            <View style={styles.dsdv}>
                                <View style={styles.sdv}>
                                    <Image source={OtherHouse} />
                                </View>
                                <View style={{}}>
                                    <Text>{value.name}</Text>
                                    <Text style={{ color: '#9d9d9d', width: '80%' }}>{value.address}</Text>
                                </View>
                            </View>
                        </Pressable>
                    })}
                </View>
            </ScrollView>
            <TouchableWithoutFeedback onPress={() => {
                navigation.push('step1')
            }}>
                <View style={styles.buttonBottom}>
                    <Text style={styles.textIn}>{'Tạo nhà'}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default ListHome

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    },
    dsdv: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 12
    },
    sdv: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
})