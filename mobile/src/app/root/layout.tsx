import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CreditCard, Home, List, User } from "@tamagui/lucide-icons"

import { HomeScreen } from "./homeScreen"
import { TabBar } from "../../components/tabBar";
import { TransactionScreen } from "./transactionScreen";
import { CardScreen } from "./cardScreen";
import { SettingScreen } from "./settingScreen";

export const RootLayout = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} tabBar={TabBar}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> }} />
            <Tab.Screen name="Transaction" component={TransactionScreen} options={{ tabBarIcon: ({ color, size }) => <List color={color} size={size} /> }} />
            <Tab.Screen name="Card" component={CardScreen} options={{ tabBarIcon: ({ color, size }) => <CreditCard color={color} size={size} /> }} />
            <Tab.Screen name="Setting" component={SettingScreen} options={{ tabBarIcon: ({ color, size }) => <User color={color} size={size} /> }} />
        </Tab.Navigator>
    )
};