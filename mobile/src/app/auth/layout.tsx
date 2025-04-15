import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";

import { LoginScreen } from "./loginScreen";


export const AuthLatout = () => {
    const Stack = createNativeStackNavigator();
    const auth = useAuth();
    const navigation = useNavigation();


    React.useEffect(() => {
        if (auth.isSignedIn) {
            navigation.navigate("Root" as never);
        }
    }, []);

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}