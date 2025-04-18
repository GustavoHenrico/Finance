import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CreateCardScreen } from "./createCardScreen";
import { TabsLayout } from "./tabs/tabsLayout";

export const RootLayout = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tab" component={TabsLayout} />
            <Stack.Screen name="CreateCard" component={CreateCardScreen} />
        </Stack.Navigator>
    )
}