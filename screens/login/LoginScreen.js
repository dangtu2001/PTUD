import { View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/images/TinTro.png'
import LogoMail from '../../assets/images/mail.png'
import LogoPassword from '../../assets/images/lock.png'
import Visibility from '../../assets/images/visibility.png'
import VisibilityOff from '../../assets/images/visibility_off.png'

const LoginScreen = ({ navigation }) => {
    const [isShowPassword, setIsShowPasssword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.mlogo} resizeMode="contain" />
            <Text style={styles.slogan}>Chào mừng bạn đến với TinTro</Text>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>Email <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.bInput}>
                        <Image source={LogoMail} style={styles.logo} />
                        <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail} />
                    </View>
                </View>
                <View style={styles.content} >
                    <Text style={styles.text} >Mật Khẩu <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.bInput}>
                        <Image source={LogoPassword} style={styles.logo} />
                        <TextInput placeholder='Mật khẩu' style={styles.input} secureTextEntry={!isShowPassword}
                            value={password} onChangeText={setPassword}
                        />
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
                <TouchableWithoutFeedback onPress={() => {
                    if (email && password)
                        navigation.navigate('listHome', { name: '', address: '' })
                    else Alert.alert('Tên đăng nhập hoặc mật khẩu không chính xác')

                }}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Đăng Nhập</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.signUp}>
                    <Text style={styles.text} onPress={() => {
                        navigation.navigate('signUp')
                    }}>Đăng ký</Text>
                    <Text style={styles.text}>Quên mật khẩu?</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#F2F2F2',
        height: '100%'
    },
    mlogo: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginTop: 80
    },
    slogan: {
        marginTop: 25,
        fontSize: 25,
        textAlign: 'center'
    },
    container: {
        marginTop: 25,
        width: '100%'
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
        width: '75%'
    },
    logo: {
        marginLeft: 10,
        width: 27,
        height: 27
    },
    loginButton: {
        backgroundColor: '#004CAD',
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#fff',

    },
    signUp: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default LoginScreen