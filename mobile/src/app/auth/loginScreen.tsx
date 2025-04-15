import React from "react";
import { useSSO } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { Button, Spinner, Text, View, YStack } from "tamagui";
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const { startSSOFlow } = useSSO();
    const navigate = useNavigation();

    const handleGoogleSignIn = async () => {
        try {
            setIsLoading(true);
            const redirectUrl = Linking.createURL("auth");
            const { createdSessionId, setActive, authSessionResult } = await startSSOFlow({ strategy: "oauth_google", redirectUrl, });

            if (createdSessionId) {
                await setActive?.({ session: createdSessionId });
                navigate.navigate("Root" as never);
            }
            setIsLoading(false);
        } catch (err) {
            console.error("Erro durante login com Google:", err);
            setIsLoading(false);
        }
    };
    const handleGithubSignIn = async () => {
        try {
            setIsLoading(true);
            const redirectUrl = Linking.createURL("auth");
            const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_github", redirectUrl, });

            if (createdSessionId) {
                await setActive?.({ session: createdSessionId });
                navigate.navigate("Root" as never);
            }
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.error("Erro durante login com Google:", err);
        }
    };

    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background">
            <View flex={1}></View>
            <YStack backgroundColor="$backgroundHover" gap="$3" padding="$4" borderTopLeftRadius="$4" borderTopRightRadius="$4" elevation="$2">
                <Text textAlign="center" fontSize="$8" fontWeight="500">Bem vindo!</Text>
                <Text textAlign="center" color="$color11">Entre com sua conta para continuar</Text>
                <Button marginTop="$5" alignItems="center" disabled={isLoading} onPress={handleGoogleSignIn}>
                    {isLoading && <Spinner />}
                    <Text>Login com o Google</Text>
                </Button>
                <Button alignItems="center" disabled={isLoading} onPress={handleGithubSignIn}>
                    {isLoading && <Spinner />}
                    <Text>Login com o Github</Text>
                </Button>
            </YStack>
        </View>
    )
};