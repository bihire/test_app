import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ImageBackground, Button, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

const Login = ({ navigation }) => {
    const { handleSubmit, errors, control } = useForm();
    const [authError, setAuthError] = useState(null);

    const onSubmit = ({ email, password }, navigation) => {
        if (email != 'peter@mail.com' || password != '123') {
            setAuthError('email or password does not exist');
        }
        navigation.replace('List');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={
                    styles.textLogo
                }>TEST APP</Text>
            </View>
            <Text style={styles.error}>{authError != '' ? authError : ''}</Text>

            <View style={styles.emailView}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=''
                    render={(props) => (
                        <TextInput
                            {...props}
                            placeholder="Email"
                            style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                            onChangeText={(value) => { props.onChange(value) }}
                            defaultValue={props.defaultValue}
                            keyboardType="email-address"
                        />
                    )}
                />
            </View>
            <View style={styles.passwordView}>
                <Controller
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    defaultValue=''
                    render={(props) => (
                        <TextInput
                            {...props}
                            secureTextEntry
                            placeholder="Password"
                            style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                            onChangeText={(value) => { props.onChange(value) }}
                            defaultValue={props.defaultValue}
                        />
                    )}
                />
            </View>
            <TouchableOpacity onPress={(data) => {
                handleSubmit(onSubmit(data, navigation))
            }}>
                <View style={styles.loginView} >
                    <Text style={styles.TextLogin}>LOGIN</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    logo: {
        marginTop: 100,
        height: 50,
        alignSelf: "center",
        marginBottom: 70,
    },
    textLogo: {
        fontSize: 60,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily: "monospace"
    },
    emailView: {
        marginTop: 70,
        width: 350,
        height: 60,
        backgroundColor: "white",
        flexDirection: "row-reverse",
        borderColor: 'gray',
        borderWidth: 1
    },
    passwordView: {
        marginTop: 2,
        width: 350,
        height: 60,
        backgroundColor: "white",
        flexDirection: "row-reverse",
        borderColor: 'gray',
        borderWidth: 1
    },
    loginView: {
        marginTop: 10,
        width: 350,
        height: 60,
        backgroundColor: "#4a4a4a",
        alignItems: "center",
        justifyContent: "center"
    },
    TextLogin: {
        fontSize: 30,
        color: "white",
        textTransform: "capitalize",
        fontFamily: "monospace",
    },
    error: {
        color: 'red'
    }
});


export default Login;