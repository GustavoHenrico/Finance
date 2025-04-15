import { createTamagui, TamaguiProvider } from "tamagui";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { defaultConfig } from "@tamagui/config/v4";
import { RootLatout } from "@/app/root/layout";
import { AuthLatout } from "@/app/auth/layout";
import { NavigationContainer } from "@react-navigation/native";


const config = createTamagui(defaultConfig)

export const App = () => {
    const stack = createNativeStackNavigator()

    return (
        <ClerkProvider tokenCache={tokenCache}>
            <TamaguiProvider config={config} defaultTheme="dark" disableInjectCSS>
                <NavigationContainer>
                    <stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }}>
                        <stack.Screen name="Root" component={RootLatout} />
                        <stack.Screen name="Auth" component={AuthLatout} />
                    </stack.Navigator>
                </NavigationContainer>
            </TamaguiProvider>
        </ClerkProvider>
    )
}

