import { ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "@tamagui/lucide-icons";
import { Button, ListItem, ScrollView, Text, View, XStack, YStack } from "tamagui"
import dayjs from "dayjs";
import React from "react";

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
    const [scrollWidth, setScrollWidth] = React.useState(0);

    const months = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    const scrollRef = React.useRef<any>(null);
    const buttonRefs = React.useRef<any[]>([]);

    React.useEffect(() => {
        if (buttonRefs.current[month] && scrollRef.current && scrollWidth) {
            buttonRefs.current[month].measureLayout(
                scrollRef.current,
                (x: number, y: number, width: number) => {
                    const offset = x + width / 2 - scrollWidth / 2;
                    scrollRef.current.scrollTo({ x: offset, animated: true });
                },
                () => { }
            );
        }
    }, [month, scrollWidth]);

    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background" >
            <XStack gap="$4" justifyContent="center" alignItems="center">
                <Text fontSize="$8" fontWeight="500">Fluxo de Caixa</Text>
            </XStack>

            <XStack marginTop="$4" justifyContent="space-between" alignItems="center" gap="$2">
                <Button size="$4" circular backgroundColor="$backgroundHover" icon={<ChevronLeft size={24} />} onPress={() => { month > 0 && setMonth(month - 1) }} />
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    borderRadius="$4"
                    onLayout={(e) => { setScrollWidth(e.nativeEvent.layout.width) }}>
                    {months.map((item, index) => (
                        <Button
                            key={index}
                            ref={(ref) => (buttonRefs.current[index] = ref)}
                            size="$5"
                            paddingVertical="$2"
                            paddingHorizontal="$4"
                            borderRadius="$0"
                            backgroundColor={month === index ? "$backgroundPress" : "$backgroundHover"}
                            onPress={() => setMonth(index)}>
                            <Text fontSize="$4" fontWeight="500">{item}</Text>
                        </Button>
                    ))}
                </ScrollView>
                <Button size="$4" circular backgroundColor="$backgroundHover" icon={<ChevronRight size={24} />} onPress={() => { month < 11 && setMonth(month + 1) }} />
            </XStack>


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