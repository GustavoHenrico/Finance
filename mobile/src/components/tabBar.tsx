import React from "react";
import { Button, XStack } from "tamagui";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { CreateOptionsSheet } from "../sheets/createOptionsSheet";


export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    return (
        <XStack justifyContent="space-between" alignItems="center" backgroundColor="$backgroundHover" paddingVertical={10} paddingHorizontal={8} borderTopWidth={1} borderTopColor="$borderColor">
            {state.routes.map((route, index) => {
                const focused = state.index === index;
                const color = focused ? "$color" : "$colorHover";
                const size = focused ? 25 : 24;
                const icon = descriptors[route.key].options.tabBarIcon;

                const isMiddle = index === 2;

                return (
                    <React.Fragment key={route.key}>
                        {isMiddle && (
                            <CreateOptionsSheet />
                        )}

                        <Button onPress={() => navigation.navigate(route.name)} backgroundColor={focused ? "$backgroundHover" : "transparent"}>
                            {icon && icon({ color, size, focused })}
                        </Button>
                    </React.Fragment>
                )
            })}
        </XStack>
    )
};