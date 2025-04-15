import React from "react";
import { MonthSelector } from "@/components/monthSelector";
import { TrendingDown, TrendingUp } from "@tamagui/lucide-icons";
import { ListItem, ScrollView, Text, View, XStack, YStack } from "tamagui";
import dayjs from "dayjs";

const data = [
    {
        id: 0,
        title: "Pix enviado para Gustavo",
        subTitle: "Conta Itau - R$ 1.000,00",
        date: new Date("2025-04-09"),
        type: "out",
    },
    {
        id: 1,
        title: "Pix enviado para Rafael",
        subTitle: "Conta Itau - R$ 2.000,00",
        date: new Date("2025-04-11"),
        type: "out",
    },
    {
        id: 2,
        title: "Pix recebido de João",
        subTitle: "Conta Nubank - R$ 1.500,00",
        date: new Date("2025-04-12"),
        type: "in",
    },
];



export const TransactionScreen = () => {
    const [month, setMonth] = React.useState(dayjs().month());

    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background" >
            <XStack gap="$4" justifyContent="center" alignItems="center">
                <Text fontSize="$8" fontWeight="500">Fluxo de Caixa</Text>
            </XStack>

            <MonthSelector month={month} setMonth={setMonth} />

            <ScrollView marginTop="$5" verticalAlign="top" showsVerticalScrollIndicator={false}>
                <YStack gap="$2">
                    {data.map((item) => (
                        <ListItem
                            key={item.id}
                            size="$5"
                            borderRadius="$3"
                            title={`${dayjs(item.date).format("DD/MM")} - ${item.title}`}
                            subTitle={item.subTitle}
                            iconAfter={item.type === "in" ? <TrendingUp size={24} color="$green11" /> : <TrendingDown size={24} color="$red11" />}
                        />
                    ))}
                </YStack>
            </ScrollView>
        </View>
    )
};