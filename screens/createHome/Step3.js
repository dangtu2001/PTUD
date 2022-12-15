import { View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import Headertop from '../../components/Headertop'
import Ab from '../../assets/images/arrow_back.png'
import Err from '../../assets/images/error.png'
import Cl from '../../assets/images/closer.png'
import Clx from '../../assets/images/close.png'
import Chh from '../../assets/images/change_history.png'
import Ch from '../../assets/images/check.png'
const Step3 = ({ navigation }) => {
    const [ds, setDs] = useState([])

    const [dv, setDv] = useState({ name: '', cost: '' })
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={{ backgroundColor: '#F2F2F2', height: '100%' }}>
            <Headertop />
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={Ab} style={{ marginLeft: 10 }} />
                </TouchableWithoutFeedback>
                <View style={{
                    marginLeft: 20,
                    width: '60%'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Bước 3/4</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Thêm loại phòng
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.push('step4')
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Tiếp tục</Text>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <View style={{ marginTop: 20, padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={Err} />
                        <Text style={{ marginLeft: 5, paddingRight: 8, fontStyle: 'italic' }}>Thêm loại phòng của bạn, loại full nội thất, loại phòng trống,... mỗi loại có giá khác nhau</Text>
                    </View>
                    {ds && ds.map((value, index) => {
                        return <View style={styles.dsdv}>
                            <View style={styles.sdv}>
                                <Text style={{ color: '#fff' }}>{index + 1}</Text>
                            </View>
                            <View style={{ width: '75%' }}>
                                <Text>{value.name}</Text>
                                <Text>Đơn giá: {value.cost}</Text>
                            </View>
                            <Pressable onPress={() => {
                                setDs([...ds.slice(0, index), ...ds.slice(index + 1)])
                            }}>
                                <Image source={Cl} />
                            </Pressable>
                        </View>
                    })}
                    <Pressable style={{ alignItems: 'center' }} onPress={() => {
                        setModalVisible(true)
                    }}>
                        <View style={styles.addButton}>
                            <Text style={styles.addButtonText}>Thêm loại phòng</Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                            <Pressable onPress={() => {
                                setModalVisible(false);
                            }}>
                                <Image source={Clx} />
                            </Pressable>
                            <Text style={{ fontSize: 22 }}>Thêm dịch vụ</Text>
                            <Pressable onPress={() => {
                                dv.name && dv.cost && setDs([...ds, dv])
                                setModalVisible(false)
                            }}>
                                <Image source={Ch} />
                            </Pressable>
                        </View>
                        <View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.text}>Tên dịch vụ</Text>
                                <TextInput style={styles.input} placeholder='Tên dịch vụ' value={dv.name} onChangeText={(name) => {
                                    setDv({ ...dv, name: name })
                                }} />
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.text}>Giá tiền</Text>
                                <TextInput style={styles.input} placeholder='Giá tiền' keyboardType="numeric" value={dv.cost} onChangeText={(cost) => {
                                    setDv({ ...dv, cost: cost })
                                }} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Step3

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    addButton: {
        backgroundColor: '#004CAD',
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
        width: '60%'
    },
    addButtonText: {
        fontSize: 18,
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
        backgroundColor: '#004cad',
        borderRadius: 45,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        height: 400,
        padding: 15
    },
    text: {
        fontSize: 16,
    },
    input: {
        paddingTop: 4,
        paddingBottom: 4,
        fontSize: 16,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0'
    },
})