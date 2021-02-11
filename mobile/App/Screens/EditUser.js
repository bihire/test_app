import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Screen from './Screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { updateUserApi } from '../Api/user';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const EditUser = ({ navigation, route }) => {

    const { data } = route.params;

    const { handleSubmit, errors, control } = useForm({
        defaultValues: {
            firstName: data.first_name
        }
    });

    const onSubmit = async (data) => {
        console.log(data);
        await editUser(data);
    }

    const editUser = async (user) => {
        try {
            const responce = await updateUserApi(user, data.id);
            if (responce.status == 200) navigation.replace('List');
        } catch (error) {
            console.log("Error in Edit", error);
        }
    }

    return (
        <ScrollView>
            <Screen style={styles.container}>
                <View style={styles.logo}>
                    <MaterialCommunityIcons name="account-edit-outline" size={50} color="black" />
                </View>
                <View style={[styles.firstName, styles.common]}>
                    <Controller
                        control={control}
                        name="firstName"
                        rules={{ required: true }}
                        defaultValue={data.first_name}
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
                        defaultValue={data.last_name}
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
                        defaultValue={data.email}
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
                        defaultValue={data.phone_number}
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


export default EditUser;