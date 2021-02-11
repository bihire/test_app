import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Screen from './Screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AddUserApi } from '../Api/user';
import { AntDesign } from '@expo/vector-icons'; 


const Register = ({ navigation }) => {
    const [data, setData] = useState([]);

    const { handleSubmit, errors, control } = useForm();

    const onSubmit = async (data) => {
        await addUser(data);
    }

    const addUser = async data => {
        try {
            const responce = await AddUserApi(data);
            if (responce.data.status == 201) navigation.replace('List');
        } catch (error) {
            console.log("Errrrorrrr", error);
        }
    }

    return (
        <ScrollView>
        <Screen style={styles.container}>
            <View style={styles.logo}>
                    <AntDesign name="adduser" size={50} color="black" />
            </View>
            <View style={[styles.firstName, styles.common]}>
                    <Controller
                        control={control}
                        name="firstName"
                        defaultValue=""
                        rules={{ required: true }}
                        render={(props) => (
                        <TextInput
                                {...props}
                                placeholder="firstname"
                                style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                                onChangeText={(value) => { props.onChange(value) }}
                                defaultValue={props.defaultValue}
                            />
                        )}
                    />
            </View>
            <View style={[styles.lastName, styles.common]}>
                    <Controller
                        control={control}
                        name="lastName"
                        defaultValue=""
                        rules={{ required: true }}
                        render={(props) => (
                        <TextInput
                                {...props}
                                placeholder="lastname"
                            style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                                onChangeText={(value) => { props.onChange(value) }}
                                defaultValue={props.defaultValue}
                            />
                        )}
                    />
            </View>
            <View style={[styles.Email, styles.common]}>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ required: true }}
                        render={(props) => (
                        <TextInput
                                {...props}
                                placeholder="email"
                                style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                                onChangeText={(value) => { props.onChange(value) }}
                                defaultValue={props.defaultValue}
                                keyboardType="email-address"
                            />
                        )}
                    />
            </View>
            <View style={[styles.phone, styles.common]}>
                    <Controller
                        control={control}
                        name="phoneNumber"
                        defaultValue=""
                        rules={{ required: true }}
                        render={(props) => (
                        <TextInput
                                {...props}
                                placeholder="phoneNumber"
                                style={{ height: '100%', width: "98%", color: "black", fontSize: 20 }}
                                onChangeText={(value) => { props.onChange(value) }}
                                defaultValue={props.defaultValue}
                                keyboardType="number-pad"
                            />
                        )}
                    />
            </View>
                <TouchableWithoutFeedback onPress={handleSubmit(onSubmit)}>
                    <View style={styles.loginView}>
                        <Text style={styles.TextLogin}>SAVE</Text>
                    </View>
                </TouchableWithoutFeedback>

        </Screen>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    keyboardView: {
        flex: 1
    },
    logo: {
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