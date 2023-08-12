import React, {
  useEffect,
  useRef
} from 'react'
import { Stack } from "expo-router/stack"
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider, createTheme } from '@rneui/themed'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import Header from 'components/Header/Header'
import BottomSheetModal from 'components/BottomSheet/BottomSheetModal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '@gorhom/bottom-sheet'

const clientProvider = new QueryClient();

const theme = createTheme({
  lightColors: {
    primary: '#232D40', //dark navy blue
    secondary: '#5448B7', //phantom color 
    background: '#f9f9f9',
  },
  darkColors: {
    primary: '#232D40', //dark navy blue
    secondary: '#5448B7', //phantom color 
    background: '#f9f9f9',
  },
})

const RootLayout = () => {

  const [fontsLoaded] = useFonts({
    RajdhaniBold: require('../../assets/fonts/Rajdhani-Bold.ttf'),
    RajdhaniSemiBold: require('../../assets/fonts/Rajdhani-SemiBold.ttf'),
    RajdhaniMedium: require('../../assets/fonts/Rajdhani-Medium.ttf'),
    RajdhaniRegular: require('../../assets/fonts/Rajdhani-Regular.ttf'),
    RajdhaniLight: require('../../assets/fonts/Rajdhani-Light.ttf'),
  })

  const bottomSheetRef = useRef<BottomSheet>(null)

  const openBottomSheet = () => {
    bottomSheetRef?.current?.expand();
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='light' backgroundColor='#101010' />

      <QueryClientProvider client={clientProvider}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider theme={theme}>
            <Stack
              initialRouteName='home'
              screenOptions={{
                headerShown: true,
                header: () => (
                  <>
                    <Header openBottomSheet={openBottomSheet} />
                  </>
                )
              }}
            >
              <Stack.Screen
                name='index'
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='home'
              />
            </Stack>
            <BottomSheetModal ref={bottomSheetRef} />
          </ThemeProvider>
        </GestureHandlerRootView>
      </QueryClientProvider >
    </>


  )
}


export default RootLayout