import { ChevronRight, CreditCard } from "@tamagui/lucide-icons";
import { ListItem, ScrollView, Text, View, XStack, YStack } from "tamagui"

export const CardScreen = () => {

    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background" >
            <XStack gap="$4" justifyContent="center" alignItems="center">
                <Text fontSize="$8" fontWeight="500">Minhas Contas</Text>
            </XStack>

            <ScrollView marginTop="$5" verticalAlign="top" showsVerticalScrollIndicator={false}>
                <YStack gap="$2"  >
                    <ListItem
                        size="$5"
                        borderRadius="$3"
                        title="Nubank"
                        subTitle="Limite: R$ 1.000,00"
                        pressTheme
                        hoverTheme
                        icon={<CreditCard size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                    />

                    <ListItem
                        size="$5"
                        borderRadius="$3"
                        title="Itau"
                        subTitle="Limite: R$ 30.000,00"
                        pressTheme
                        hoverTheme
                        icon={<CreditCard size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                    />

                </YStack>
            </ScrollView>
        </View>
    )
};