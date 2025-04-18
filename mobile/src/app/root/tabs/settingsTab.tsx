import React from "react"
import { Avatar } from "@/components/avatar"
import { useAuth, useUser } from "@clerk/clerk-expo"
import { useNavigation } from "@react-navigation/native"
import { BadgeDollarSign, Bot, ChevronRight, FileDown, FolderKanban, LogOut, ShieldCheck, Target, User, Settings } from "@tamagui/lucide-icons"
import { Button, ListItem, ScrollView, Spinner, Text, View, XStack, YStack } from "tamagui"


export const SettingsTab = () => {
    const [isSignOut, setIsSignOut] = React.useState(false);
    const { user } = useUser();
    const { signOut } = useAuth();
    const navigation = useNavigation();


    const handleSignOut = async () => {
        setIsSignOut(true);
        await signOut();
        navigation.navigate("Auth" as never);
        setIsSignOut(false);
    }

    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background" >

            <XStack marginTop="$8" justifyContent="space-between" alignItems="center">
                <XStack gap="$4" justifyContent="center" alignItems="center">
                    <Avatar size="$5" radius="$5" image={user?.imageUrl} />
                    <YStack>
                        <Text fontSize="$8" fontWeight="500">{user?.fullName}</Text>
                        <Text color="$color11">{user?.emailAddresses[0].emailAddress}</Text>
                    </YStack>
                </XStack>
                <Button size="$4" circular color="$red11" onPress={handleSignOut} >
                    {!isSignOut && <LogOut color="$red11" size={20} />}
                    {isSignOut && <Spinner color="$red11" />}
                </Button>
            </XStack>

            <ScrollView marginTop="$5" verticalAlign="top" showsVerticalScrollIndicator={false}>
                <YStack gap="$3">
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Editar perfil"
                        icon={<User size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Configurações"
                        icon={<Settings size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Meu plano"
                        icon={<BadgeDollarSign size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Categorias"
                        icon={<FolderKanban size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Metas"
                        icon={<Target size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Limites"
                        icon={<ShieldCheck size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Exportar dados"
                        icon={<FileDown size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                    <ListItem
                        size="$5"
                        hoverTheme
                        pressTheme
                        title="Assistente IA"
                        icon={<Bot size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => { }}
                    />
                </YStack>
            </ScrollView>
        </View>
    )
}