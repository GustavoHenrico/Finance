import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabBar } from "@/components/tabBar";
import { useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { CreditCard, Home, List, User } from "@tamagui/lucide-icons";

import { HomeScreen } from "./homeScreen"
import { SettingsScreen } from "./settingsScreen";
import { TransactionScreen } from "./transactionScreen";
import { CardScreen } from "./cardScreen";


export const RootLatout = () => {
    const Tab = createBottomTabNavigator();
    const auth = useAuth();
    const navigation = useNavigation();

    React.useEffect(() => {
        if (!auth.isSignedIn) {
            navigation.navigate("Auth" as never);
        }
    }, []);

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} tabBar={TabBar}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> }} />
            <Tab.Screen name="Transaction" component={TransactionScreen} options={{ tabBarIcon: ({ color, size }) => <List color={color} size={size} /> }} />
            <Tab.Screen name="Card" component={CardScreen} options={{ tabBarIcon: ({ color, size }) => <CreditCard color={color} size={size} /> }} />
            <Tab.Screen name="Setting" component={SettingsScreen} options={{ tabBarIcon: ({ color, size }) => <User color={color} size={size} /> }} />
        </Tab.Navigator>
    )
}