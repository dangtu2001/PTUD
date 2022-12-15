import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Headertop from '../../components/Headertop'
import OtherHouse from '../../assets/images/other_house.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllRoom from './myRoom/AllRoom'
import Rented from './myRoom/Rented'
import EmptyRoom from './myRoom/EmptyRoom'

const Tab = createBottomTabNavigator();

const MyRoom = () => {
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
                    }}>Phòng</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Nhà số 2
                    </Text>
                </View>
            </View>
            <View style={{ height: '80%', borderTopWidth: 0 }}>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: '#004CAD',
                        position: 'absolute',
                        top: 0
                    },
                    headerShown: false,
                })}>
                    <Tab.Screen component={AllRoom} name='allRoom' key='allRoom'
                        options={{
                            tabBarIcon: ({ focused, color, size }) => {
                                return focused ? <Text style={{ color: '#fff' }}>Tất cả</Text>
                                    : <Text style={{ color: '#fff', opacity: 0.5 }}>Tất cả</Text>
                            },
                            tabBarLabel: ({ focused, color, size }) => {
                                return focused ? <Text style={{ color: '#fff' }}>3</Text>
                                    : <Text style={{ color: '#fff', opacity: 0.5 }}>3</Text>
                            }
                        }}
                    />
                    <Tab.Screen component={Rented} name='rented' key='rented'
                        options={{
                            tabBarIcon: ({ focused, color, size }) => {
                                return focused ? <Text style={{ color: '#fff' }}>Đang thuê</Text>
                                    : <Text style={{ color: '#fff', opacity: 0.5 }}>Đang thuê</Text>
                            },
                            tabBarLabel: ({ focused, color, size }) => {
                                return focused ? <Text style={{ color: '#fff' }}>2</Text>
                                    : <Text style={{ color: '#fff', opacity: 0.5 }}>2</Text>
                            }
                        }}
                    />
                    <Tab.Screen component={EmptyRoom} name='emptyRoom' key='emptyRoom'
                        options={{
                            tabBarIcon: ({ focused, color, size }) => {
                                return focused ? <Text style={{ color: '#fff' }}>Phòng trống</Text>
                                    : <Text style={{ color: '#fff', opacity: 0.5 }}>Phòng trống</Text>
                            },
                            tabBarLabel: ({ focused, color, size }) => {
                                return focused ? <Text style={{ color: '#fff' }}>1</Text>
                                    : <Text style={{ color: '#fff', opacity: 0.5 }}>1</Text>
                            }
                        }}
                    />
                </Tab.Navigator>
            </View>
        </View>
    )
}

export default MyRoom

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