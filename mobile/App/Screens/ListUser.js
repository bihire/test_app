import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableWithoutFeedback, TouchableOpacity, LogBox } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { AntDesign } from '@expo/vector-icons';

import Screen from './Screen';
import { ListUserApi } from '../Api/user';

dayjs.extend(relativeTime)

const ListUserEditActions = (props) => {

    return (
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Edit', { data: props.data })}>
                <View
                    style={styles.ActionContainer}>
                    <MaterialCommunityIcons
                        size={35}
                        name="account-edit"
                        />
                </View>
            </TouchableWithoutFeedback>
        )
    }
    
    const User = (props) => {
        const { data, navigation } = props;

        return (
            <>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { user: data })} >
                    <Swipeable renderRightActions={() => <ListUserEditActions data={data} navigation={navigation} />} >
                        <View style={styles.user}>
                            <View style={{ flexDirection: "row" }}>
                                <ImageBackground source={require('../Assets/profile2.jpeg')} style={{
                                    height: 70,
                                    width: 70,
                                    borderRadius: 50,
                                    overflow: "hidden",
                                    marginLeft: 10
                                }} />
                                <View style={styles.userBody}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={styles.name}>{data.first_name}</Text>
                                        <Text>{data.email}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ marginRight: 10, marginTop: 2 }}>{dayjs(data.createdAt).fromNow()}</Text>
                        </View>
                    </Swipeable>
                </TouchableOpacity>
            </>
    )
}


const Separator = () => (
    <View style={{ height: 2 }} />
)

const ListUser = ({ navigation }) => {

    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const responce = await ListUserApi();
            setList(responce.data.data);
        } catch (error) {
            console.log("Error IN Listing User", error);
        }
    }

    const handleRefresh = async () => {
        try {
            const responce = await getUsers();
            setList(responce.data.data);   
        } catch (error) {
            console.log("Errr in refreshing", error);
        }
    }

    return (
        <Screen style={styles.container}>
            <View style={styles.upperBody}>
                <ImageBackground source={require('../Assets/profile.png')} style={{
                    height: 70,
                    width: 70,
                    borderRadius: 50,
                    overflow: "hidden",
                }} />
                <View style={styles.upperBodyText}>
                    <Text style={styles.name}>Peter Scholes Admin</Text>
                    <Text>4.8</Text>
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={[styles.listName, styles.name, { marginLeft: 10 }]}>List of Users</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.listName, styles.name, { marginRight: 30 }]} >
                        <AntDesign name="adduser" size={30} color="black" />
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            <FlatList
                style={styles.flatlist}
                showsHorizontalScrollIndicator={false}
                data={list}
                keyExtractor={(item) => String(item.id)}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                    <User data={item} navigation={navigation} />
                )}
                refreshing={refreshing}
                onRefresh={handleRefresh}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    upperBody: {
        flexDirection: "row",
        alignSelf: "flex-start",
        width: "100%",
        marginLeft: 10
    },
    upperBodyText: {
        justifyContent: "center",
        marginLeft: 10,
        width: "75%",
    },
    name: {
        fontFamily: "monospace",
        fontWeight: "bold",
        marginBottom: 10,
        fontSize: 20
    },
    listName: {
        fontFamily: "monospace",
        fontSize: 20,
    },
    user: {
        height: 70,
        width: 400,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "rgba(0, 0, 0, 0.46)",
        borderWidth: 0.2
    },
    userBody: {
        justifyContent: "center",
        marginLeft: 20,
        marginTop: 5,
        flexDirection: "row"
    },
    ActionContainer: {
        backgroundColor: "#ff5252",
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        marginBottom: 5
    }
})

export default ListUser;