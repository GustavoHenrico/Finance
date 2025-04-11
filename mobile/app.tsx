import { defaultConfig } from '@tamagui/config/v4';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createTamagui, TamaguiProvider } from 'tamagui';
import { StatusBar } from 'expo-status-bar';

import { RootLayout } from './src/app/root/layout';
import { AuthLayout } from './src/app/auth/layout';
import { useState } from 'react';

const Config = createTamagui(defaultConfig);
const Stack = createNativeStackNavigator();

export const App = () => {
  const [screenFlow, setScreenFlow] = useState<'onboarding' | 'auth' | 'app'>('app');

  return (
    <TamaguiProvider config={Config} defaultTheme="dark" disableInjectCSS>
      <NavigationContainer>
        <StatusBar style="light" />

        {screenFlow === 'app' && (
          <Stack.Navigator initialRouteName="App" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="App" component={RootLayout} />
          </Stack.Navigator>
        )}

        {screenFlow === 'auth' && (
          <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthLayout} />
          </Stack.Navigator>
        )}

        {screenFlow === 'onboarding' && (
          <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={RootLayout} />
          </Stack.Navigator>
        )}

      </NavigationContainer>
    </TamaguiProvider>
  )
};