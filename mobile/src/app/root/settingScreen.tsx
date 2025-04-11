import { BadgeDollarSign, Bot, ChevronRight, FileDown, FolderKanban, LogOut, ShieldCheck, Target, User, Settings } from "@tamagui/lucide-icons";
import { Button, ListItem, ScrollView, Text, View, XStack, YStack } from "tamagui"
import { Avatar } from "../../components/avatar";


export const SettingScreen = () => {

    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background" >

            <XStack marginTop="$8" justifyContent="space-between" alignItems="center">
                <XStack gap="$4" justifyContent="center" alignItems="center">
                    <Avatar size="$5" radius="$5" />
                    <YStack>
                        <Text fontSize="$8" fontWeight="500">Gustavo Henrico</Text>
                        <Text color="$color11">gustavohenrico58@gmail.com</Text>
                    </YStack>
                </XStack>
                <Button size="$4" circular color="$red11" icon={<LogOut size={20} />} onPress={() => { }} />
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
};