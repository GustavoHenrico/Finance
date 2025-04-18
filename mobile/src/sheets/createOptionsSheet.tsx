import React from "react";
import { Button, Sheet, Text, YStack } from "tamagui";
import { ArrowDownUp, CreditCard, MinusCircle, Plus, PlusCircle } from "@tamagui/lucide-icons";
import { useNavigation } from "@react-navigation/native";


export function CreateOptionsSheet() {
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigation();

    const handlePress = (route: string) => {
        setOpen(!open);
        navigation.navigate(route as never);
    };

    return (
        <>
            <Button marginBottom="$1" circular size="$6" theme="green" icon={<Plus size={24} />} onPress={() => setOpen(!open)} />

            <Sheet modal forceRemoveScrollEnabled={open} open={open} onOpenChange={setOpen} animation="medium" dismissOnSnapToBottom snapPoints={[40]}>
                <Sheet.Overlay opacity={0.5} />
                <Sheet.Handle backgroundColor="$color4" />

                <Sheet.Frame backgroundColor="$backgroundHover" padding="$4" paddingTop="$7" alignItems="center" gap="$5">
                    <Text fontSize="$8" fontWeight="500">O que voce quer Adicionar?</Text>

                    <YStack width="100%" gap="$3">
                        <Button size="$5" justifyContent="space-between" theme="green" iconAfter={<PlusCircle size={24} />} onPress={() => handlePress("CreateCard")}>Receita</Button>
                        <Button size="$5" justifyContent="space-between" theme="red" iconAfter={<MinusCircle size={24} />} onPress={() => handlePress("CreateCard")}>Despesa</Button>
                        <Button size="$5" justifyContent="space-between" theme="blue" iconAfter={<ArrowDownUp size={24} />} onPress={() => handlePress("CreateCard")}>Trasferencia</Button>
                        <Button size="$5" justifyContent="space-between" iconAfter={<CreditCard size={24} />} onPress={() => handlePress("CreateCard")}>Conta</Button>
                    </YStack>
                </Sheet.Frame>
            </Sheet>
        </>

    )
};