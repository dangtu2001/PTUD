import { View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react'
import Headertop from '../../components/Headertop'
import Ab from '../../assets/images/arrow_back.png'
import Ch from '../../assets/images/change_history.png'

const Step1 = ({ navigation }) => {

    const data = ['Thu theo số lượng', 'Thu theo người', 'Thu theo phòng']

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
                    }}>Bước 1/4</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Thêm thông tin nhà
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.push('step2')
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Tiếp tục</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ padding: 10, marginTop: 30 }} >
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.text}>Tên nhà</Text>
                    <TextInput style={styles.input} placeholder='Tên nhà' />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.text}>Địa chỉ</Text>
                    <TextInput style={styles.input} placeholder='Địa chỉ' />
                </View>
                <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text style={styles.text}>Giá điện</Text>
                        <TextInput style={styles.input} keyboardType="numeric" placeholder='Giá điện' />
                    </View>
                    <View>
                        <Text style={styles.text}></Text>
                        <SelectDropdown data={data} defaultValue={data[0]} dropdownIconPosition={'right'} renderDropdownIcon={isOpened => {
                            return <Image source={Ch} style={{ marginLeft: 10 }} />;
                        }} buttonStyle={{ height: 37, backgroundColor: '#F2F2F2', borderBottomColor: '#B0B0B0', borderBottomWidth: 1 }} />
                    </View>
                </View>
                <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text style={styles.text}>Giá nước</Text>
                        <TextInput style={styles.input} keyboardType="numeric" placeholder='Giá nước' />
                    </View>
                    <View>
                        <Text style={styles.text}></Text>
                        <SelectDropdown data={data} defaultValue={data[1]} dropdownIconPosition={'right'} renderDropdownIcon={isOpened => {
                            return <Image source={Ch} style={{ marginLeft: 10 }} />;
                        }} buttonStyle={{ height: 37, backgroundColor: '#F2F2F2', borderBottomColor: '#B0B0B0', borderBottomWidth: 1 }} />
                    </View>
                </View>
                <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text style={styles.text}>Giá internet</Text>
                        <TextInput style={styles.input} keyboardType="numeric" placeholder='Giá internet' />
                    </View>
                    <View>
                        <Text style={styles.text}></Text>
                        <SelectDropdown data={data} defaultValue={data[2]} dropdownIconPosition={'right'} renderDropdownIcon={isOpened => {
                            return <Image source={Ch} style={{ marginLeft: 10 }} />;
                        }} buttonStyle={{ height: 37, backgroundColor: '#F2F2F2', borderBottomColor: '#B0B0B0', borderBottomWidth: 1 }} />
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Step1

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
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