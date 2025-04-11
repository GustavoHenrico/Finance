import { Avatar } from "../../components/avatar";
import { DollarSign, Eye, EyeOff, PiggyBank } from "@tamagui/lucide-icons";
import { Button, Card, Text, View, XStack, YStack } from "tamagui"
import React from "react";


export const HomeScreen = () => {
    const [isVisible, setIsVisible] = React.useState(false);


    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background" >
            <XStack marginTop="$8" justifyContent="space-between" alignItems="center">
                <XStack gap="$4" justifyContent="center" alignItems="center">
                    <Avatar size="$5" radius="$5" />
                    <YStack>
                        <Text color="$color11">Boa noite,</Text>
                        <Text fontSize="$8" fontWeight="500">Gustavo</Text>
                    </YStack>
                </XStack>
                <Button size="$4" circular onPress={() => { setIsVisible(!isVisible) }} icon={isVisible ? <EyeOff size={20} /> : <Eye size={20} />} />
            </XStack>


            <YStack marginTop="$7" gap="$5" flex={1}>
                <Card>
                    <Card.Header>
                        <XStack alignItems="center" justifyContent="space-between">
                            <YStack gap="$2">
                                <Text fontSize="$4" color="$green11">Saldo geral</Text>
                                <Text fontSize="$6" fontWeight="500">{isVisible ? "R$ 2.000,00" : "R$ ----"}</Text>
                            </YStack>
                            <XStack flex={1} justifyContent="flex-end">
                                <View width={20} height={20} backgroundColor="$backgroundHover" borderRadius="$5" justifyContent="center" alignItems="center">
                                    <PiggyBank color="$green11" />
                                </View>
                            </XStack>
                        </XStack>
                    </Card.Header>
                </Card>

                <XStack gridColumn={2} gap="$2" justifyContent="center" alignItems="center">
                    <Card width="49%">
                        <Card.Header>
                            <XStack alignItems="center" justifyContent="space-between">
                                <YStack gap="$2">
                                    <Text fontSize="$4" color="$red11">Despesas</Text>
                                    <Text fontSize="$6" fontWeight="500">{isVisible ? "R$ 1.000,00" : "R$ ----"}</Text>
                                </YStack>
                                <XStack flex={1} justifyContent="flex-end">
                                    <View width={20} height={20} backgroundColor="$backgroundHover" borderRadius="$5" justifyContent="center" alignItems="center">
                                        <DollarSign color="$red11" />
                                    </View>
                                </XStack>
                            </XStack>
                        </Card.Header>
                    </Card>

                    <Card width="49%">
                        <Card.Header>
                            <XStack alignItems="center" justifyContent="space-between">
                                <YStack gap="$2">
                                    <Text fontSize="$4" color="$blue11">Pagos</Text>
                                    <Text fontSize="$6" fontWeight="500">{isVisible ? "R$ 500,00" : "R$ ----"}</Text>
                                </YStack>
                                <XStack flex={1} justifyContent="flex-end">
                                    <View width={20} height={20} backgroundColor="$backgroundHover" borderRadius="$5" justifyContent="center" alignItems="center">
                                        <DollarSign color="$blue11" />
                                    </View>
                                </XStack>
                            </XStack>
                        </Card.Header>
                    </Card>
                </XStack>
            </YStack>
        </View>
    )
};