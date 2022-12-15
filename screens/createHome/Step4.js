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

const Step4 = ({ navigation }) => {

    const [sp, setSp] = useState(0)
    const [dsp, setDsp] = useState('')
    const [ds, setDs] = useState([])

    const [dv, setDv] = useState({ name: '', cost: '' })
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisible1, setModalVisible1] = useState(false)

    const data = ['Phòng 2 full nội thất - 3.400.000', 'Phòng 3 - 4.000.000']
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
                    }}>Bước 4/4</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Thêm phòng
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    setModalVisible1(true)
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Tiếp tục</Text>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <View style={{ marginTop: 20, padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 8 }}>
                        <Text style={{ fontSize: 20 }}>Số phòng: {sp}</Text>
                    </View>
                    {sp != 0 && Array.from(Array(sp).keys()).map(() => {
                        return <View style={styles.dsdv}>
                            <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '43%', marginRight: 5 }}>
                                    <Text style={styles.text}>Tên phòng</Text>
                                    <TextInput style={styles.input} placeholder='Tên phòng' />
                                </View>
                                <View>
                                    <Text style={styles.text}>Loại phòng</Text>
                                    <SelectDropdown data={data} defaultValue={data[0]} dropdownIconPosition={'right'} renderDropdownIcon={isOpened => {
                                        return <Image source={Chh} style={{ marginLeft: 10 }} />;
                                    }} buttonStyle={{ height: 37, backgroundColor: '#fff', borderBottomColor: '#B0B0B0', borderBottomWidth: 1 }} />
                                </View>
                            </View>
                        </View>
                    })}
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
                        <View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.text}>Nhập số phòng nhà của bạn</Text>
                                <TextInput style={styles.input} placeholder='Nhập số phòng nhà của bạn' keyboardType="numeric" value={dsp} onChangeText={setDsp} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Pressable onPress={() => {
                                    setModalVisible(false)
                                }}>
                                    <Text style={{ color: 'red', marginRight: 15 }}>Đóng</Text>
                                </Pressable>
                                <Pressable onPress={() => {
                                    setSp(Number(dsp))
                                    setModalVisible(false)
                                }}>
                                    <Text style={{ color: 'blue' }}>Xác nhận</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                    setModalVisible(!modalVisible1);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, styles.xn]}>
                        <View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.text}>Bạn có muốn tạo nhà với những thông tin trên?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Pressable onPress={() => {
                                    setModalVisible1(false)
                                }}>
                                    <Text style={{ color: 'red', marginRight: 15 }}>Đóng</Text>
                                </Pressable>
                                <Pressable onPress={() => {
                                    setModalVisible1(false)
                                    navigation.navigate('listHome', {
                                        name: 'Nhá số 2',
                                        address: '256 xvnt, phường 26, quận Bình Thạnh, thành phố HCM'
                                    })
                                }}>
                                    <Text style={{ color: 'blue' }}>Xác nhận</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableWithoutFeedback onPress={() => {
                setModalVisible(true)
            }}>
                <View style={styles.buttonBottom}>
                    <Text style={styles.textIn}>Thêm phòng</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Step4

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
        height: 140,
        padding: 15
    },
    xn: {
        height: 100,
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