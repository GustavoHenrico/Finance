import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabBar } from "@/components/tabBar";
import { CreditCard, Home, List, User } from "@tamagui/lucide-icons";

import { HomeTab } from "./homeTab"
import { SettingsTab } from "./settingsTab";
import { TransactionTab } from "./transactionTab";
import { CardTab } from "./cardTab";



export const TabsLayout = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} tabBar={TabBar}>
            <Tab.Screen name="Home" component={HomeTab} options={{ tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> }} />
            <Tab.Screen name="Transaction" component={TransactionTab} options={{ tabBarIcon: ({ color, size }) => <List color={color} size={size} /> }} />
            <Tab.Screen name="Card" component={CardTab} options={{ tabBarIcon: ({ color, size }) => <CreditCard color={color} size={size} /> }} />
            <Tab.Screen name="Setting" component={SettingsTab} options={{ tabBarIcon: ({ color, size }) => <User color={color} size={size} /> }} />
        </Tab.Navigator>
    )
}