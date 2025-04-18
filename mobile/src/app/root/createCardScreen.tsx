import { Text, View, XStack } from "tamagui";

export const CreateCardScreen = () => {

    return (
        <View flex={1} paddingTop="$8" paddingHorizontal="$3" backgroundColor="$background" >
            <XStack gap="$4" justifyContent="center" alignItems="center">
                <Text fontSize="$8" fontWeight="500">Create Card</Text>
            </XStack>


        </View>
    )
};