import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyHome from './MyHome';
import MyRoom from './MyRoom';
import Snla from './Snla';
import Bill from './Bill';
import Person from './Person';
import MHome from '../../assets/images/home.png';
import Room from '../../assets/images/room_service.png';
import Add from '../../assets/images/add.png';
import Paid from '../../assets/images/paid.png'
import Acce from '../../assets/images/accessibility_new.png';
import MHome1 from '../../assets/images/home1.png';
import Room1 from '../../assets/images/room_service1.png';
import Add1 from '../../assets/images/add1.png';
import Paid1 from '../../assets/images/paid1.png'
import Acce1 from '../../assets/images/accessibility_new1.png';



const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#004CAD'
                },
                tabBarLabel: ({ focused, color, size }) => {
                    let text;
                    switch (route.name) {
                        case 'myHome':
                            text = 'Nhà'
                            break;
                        case 'myRoom':
                            text = 'Phòng'
                            break;
                        case 'snla':
                            text = 'Chốt đơn'
                            break;
                        case 'bill':
                            text = 'Hóa đơn'
                            break;
                        case 'person':
                            text = 'Cá nhân'
                            break;
                        default:
                            text = 'Nhà'
                            break;
                    }
                    return focused ? <Text style={{ color: '#fff' }}>{text}</Text>
                        : <Text style={{ color: '#fff', opacity: 0.5 }}>{text}</Text>
                }
            })}

        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return focused ? <Image source={MHome} /> : <Image source={MHome1} />
                }
            }} name="myHome" component={MyHome} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return focused ? <Image source={Room} /> : <Image source={Room1} />
                }
            }} name="myRoom" component={MyRoom} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return focused ? <Image source={Add} /> : <Image source={Add1} />
                }
            }} name="snla" component={Snla} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return focused ? <Image source={Paid} /> : <Image source={Paid1} />
                }
            }} name="bill" component={Bill} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return focused ? <Image source={Acce} /> : <Image source={Acce1} />
                }
            }} name="person" component={Person} />
        </Tab.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({})