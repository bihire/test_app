import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';



const Separator = () => (
    <View style={{ height: 2 }} />
)


const Name = ({ data }) => {

    return (
        <View>
            <Text>{data}</Text>
        </View>
    )
}

function UserDetail({ route }) {
    const { user } = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Assets/profile.png')} style={{
                height: 250,
                width: 250,
                overflow: "hidden",
                borderRadius: 125,
                alignSelf: "center",
                marginTop: 50
            }} />
            <Text style={[styles.name, { fontWeight: "bold" }]}>User Information: </Text>
            <View>
                <View style={styles.list}>
                    <Text style={styles.name}>Fistname: {user.first_name}</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.name}>Lastname: {user.last_name}</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.name}>Email: {user.email}</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.name}>Phone: {user.phone_number}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }, name: {
        fontFamily: "monospace",
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 7,
        marginLeft: 5
    }, list: {
        borderColor: "rgba(0, 0, 0, 0.46)",
        borderWidth: 0.2,
        marginVertical: 1
    }
})

export default UserDetail;