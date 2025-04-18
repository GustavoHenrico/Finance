import { createTamagui, TamaguiProvider } from "tamagui";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { defaultConfig } from "@tamagui/config/v4";

import { NavigationContainer } from "@react-navigation/native";
import { RootLayout } from "@/app/root/layout";

const config = createTamagui(defaultConfig)

export const App = () => {

    return (
        <ClerkProvider tokenCache={tokenCache}>
            <TamaguiProvider config={config} defaultTheme="dark" disableInjectCSS>
                <NavigationContainer>
                    <RootLayout />
                </NavigationContainer>
            </TamaguiProvider>
        </ClerkProvider>
    )
}

