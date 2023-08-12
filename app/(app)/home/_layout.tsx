import React from 'react'
import { Tabs } from "expo-router/tabs"
import { StatusBar } from 'expo-status-bar'
import { useTheme } from '@rneui/themed';

//Icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const TabsLayout = () => {
  const { theme } = useTheme()

  return (
    <>
      <StatusBar style='light' backgroundColor='#101010' />

      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarLabelStyle: { display: 'none' },
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
            height: 60,
          },
          header: () => <></>
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: () =>
              <Ionicons name="home" size={24} color="white" />
          }}

        />
        <Tabs.Screen
          name='games'
          options={{
            tabBarIcon: () =>
              <Ionicons name="ios-game-controller" size={24} color="white" />
          }}
        />

        <Tabs.Screen
          name='wallet'
          options={{
            tabBarIcon: () =>
              <FontAwesome5 name="cube" size={24} color="white" />
          }}

        />
        <Tabs.Screen
          name='notifications'
          options={{
            tabBarIcon: () =>
              <Ionicons name="notifications" size={24} color="white" />
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: () =>
              <FontAwesome name="user" size={24} color="white" />
          }}
        />
      </Tabs>
    </>


  )
}


export default TabsLayout