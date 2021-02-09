import React from 'react';
import { View, StyleSheet, Text, TextInput, ImageBackground } from 'react-native';

import Screen from './Screen';


const Register = () => {
    return (
        <Screen style={styles.container}>
            <View style={styles.logo}>
                <Text style={
                    styles.textLogo
                }>REGISTER</Text>
            </View>
            <View style={[styles.firstName, styles.common]}>
                <TextInput
                    placeholder="Firsname"
                    style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                />
            </View>
            <View style={[styles.lastName, styles.common]}>
                <TextInput
                    placeholder="Last Name"
                    style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                />
            </View>
            <View style={[styles.Email, styles.common]}>
                <TextInput
                    placeholder="Email"
                    style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                />
            </View>
            <View style={[styles.phone, styles.common]}>
                <TextInput
                    placeholder="Phone"
                    style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                />
            </View>
            <View style={styles.passwordView}>
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                />
            </View>
            <View style={styles.loginView}>
                <Text style={styles.TextLogin}>LOGIN</Text>
            </View>
        </Screen>
    )
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
    },
    logo: {
        marginTop: 100,
        height: 50,
        alignSelf: "center",
        marginBottom: 50
    },
    textLogo: {
        fontSize: 40,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily: "monospace"
    },
    common: {
        marginTop: 2,
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
        justifyContent: "center",
    },
    TextLogin: {
        fontSize: 30,
        color: "white",
        textTransform: "capitalize",
        fontFamily: "monospace"
    }

});


export default Register;