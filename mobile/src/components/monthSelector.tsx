import React from "react";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";
import { Button, ScrollView, Text, XStack } from "tamagui";


export const MonthSelector = ({ month, setMonth }: { month: number; setMonth: (month: number) => void }) => {
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
    )
};