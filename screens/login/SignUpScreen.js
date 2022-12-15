import { View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import Headertop from '../../components/Headertop'
import ArLeft from '../../assets/images/keyboard_arrow_left.png'
import Visibility from '../../assets/images/visibility.png'
import VisibilityOff from '../../assets/images/visibility_off.png'

const SignUpScreen = ({ navigation }) => {

    let initState = {
        name: '',
        email: '',
        phone: '',
        password: '',
        rePassword: ''
    }

    const [isShowPassword, setIsShowPasssword] = useState(false)
    const [state, setState] = useState(initState)

    return (
        <View style={{ backgroundColor: '#F2F2F2', height: '100%' }}>
            <Headertop />
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={ArLeft} />
                </TouchableWithoutFeedback>
                <Text style={{
                    color: 'white',
                    fontSize: 21
                }}>Đăng ký</Text>
                <Text style={{ width: 40 }}></Text>
            </View>
            <View style={{ padding: 20 }}>
                <View style={styles.content}>
                    <Text style={styles.text}>Họ và tên <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.bInput}>
                        <TextInput placeholder='Họ và tên' style={styles.input} value={state.name} onChangeText={(name) => {
                            setState({ ...state, name: name })
                        }} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Email <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.bInput}>
                        <TextInput placeholder='Email' style={styles.input} value={state.email} onChangeText={(email) => {
                            setState({ ...state, email: email })
                        }} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Số điện thoại <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.bInput}>
                        <TextInput placeholder='Số điện thoại' style={styles.input} value={state.phone} onChangeText={(phone) => {
                            setState({ ...state, phone: phone })
                        }} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Mật khẩu <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.bInput}>
                        <TextInput placeholder='Mật khẩu' style={styles.input} secureTextEntry={!isShowPassword} value={state.password} onChangeText={(password) => {
                            setState({ ...state, password: password })
                        }} />
                        <View >
                            {
                                isShowPassword ?
                                    <TouchableWithoutFeedback onPress={() => {
                                        setIsShowPasssword(!isShowPassword)
                                    }}>
                                        <Image source={Visibility} />
                                    </TouchableWithoutFeedback> :
                                    <TouchableWithoutFeedback onPress={() => {
                                        setIsShowPasssword(!isShowPassword)
                                    }}>
                                        <Image source={VisibilityOff} />
                                    </TouchableWithoutFeedback>
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Nhập lại mật khẩu <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.bInput}>
                        <TextInput placeholder='Nhập lại mật khẩu' style={styles.input} secureTextEntry={!isShowPassword} value={state.rePassword} onChangeText={(rePassword) => {
                            setState({ ...state, rePassword: rePassword })
                        }} />
                        <View >
                            {
                                isShowPassword ?
                                    <TouchableWithoutFeedback onPress={() => {
                                        setIsShowPasssword(!isShowPassword)
                                    }}>
                                        <Image source={Visibility} />
                                    </TouchableWithoutFeedback> :
                                    <TouchableWithoutFeedback onPress={() => {
                                        setIsShowPasssword(!isShowPassword)
                                    }}>
                                        <Image source={VisibilityOff} />
                                    </TouchableWithoutFeedback>
                            }
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text style={{ fontSize: 16, textAlign: 'center', lineHeight: 21, fontStyle: 'italic' }}>Khi tạo tài khoản bạn đã chấp nhận {'\n'}
                        <Text style={{ color: '#004cad', textDecorationLine: 'underline' }}>Điều khoản dịch vụ</Text>
                        {' '}và <Text style={{ color: '#004cad', textDecorationLine: 'underline' }}>chính sách bảo mật</Text> {'\n'}
                        của chúng tôi</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    if (state.name && state.name && state.phone && state.password && state.rePassword) {
                        if (state.password != state.rePassword) {
                            Alert.alert('Mật khẩu không giống nhau')
                        } else {
                            navigation.navigate('login')
                        }
                    }
                    else {
                        Alert.alert('Chưa điền đủ thông tin')
                    }

                }}>
                    <View style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>Đăng ký</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#004CAD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },
    bInput: {
        width: '100%',
        backgroundColor: 'F2F2F2',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#C9C9C9',
    },
    input: {
        padding: 8,
        fontSize: 16,
        width: '90%'
    },
    signUpButton: {
        backgroundColor: '#004CAD',
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20
    },
    signUpButtonText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#fff',

    },
})

export default SignUpScreen