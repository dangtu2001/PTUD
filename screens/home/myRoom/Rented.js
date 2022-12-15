import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rented = () => {
    const romes = [{ name: '101', people: 1, status: true, cost: '5.100.000' },
    { name: '102', people: 1, status: true, cost: '3.400.000' }
    ]

    return (
        <View>
            <View style={{ height: 50 }}></View>
            <View style={{ padding: 10 }}>
                {romes.map((value, index) => {
                    return <View style={styles.dsdv} key={index}>
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 20 }}>{value.name}</Text>
                            <Text style={{ fontSize: 12 }}>{value.people} khách</Text>
                        </View>
                        <View>
                            {value.status ? <Text style={{ fontSize: 16, color: 'green' }}>Đang thuê</Text> :
                                <Text style={{ fontSize: 16, color: 'red' }}>Phòng trống</Text>}
                            <Text style={{ fontSize: 12 }}>{value.cost}</Text>
                        </View>
                    </View>
                })}
            </View>
        </View>
    )
}

export default Rented

const styles = StyleSheet.create({
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