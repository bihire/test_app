import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Login from './Login';
import Register from './Register';
import ListUser from './ListUser'
import EditUser from './EditUser';
import UserDetail from './UserDetail';


const Stack = createStackNavigator();

const FormTitle = (props) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
}

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerTitle: props => <FormTitle title="REGISTER USER" /> }} />
        <Stack.Screen name="List" component={ListUser} options={{ headerTitle: props => <FormTitle title="LIST USER" /> }} />
        <Stack.Screen name="Detail" component={UserDetail} options={{ headerTitle: props => <FormTitle title="PROFILE" /> }} />
        <Stack.Screen name="Edit" component={EditUser} options={{ headerTitle: props => <FormTitle title="EDIT USER" /> }} />
    </Stack.Navigator>
)

const styles = StyleSheet.create({
    titleContainer: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: "monospace",
    }
})


export default function Navigation() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}