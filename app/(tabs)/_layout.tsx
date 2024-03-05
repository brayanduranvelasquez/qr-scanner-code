import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <SafeAreaProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { marginBottom: 7 },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Scan QR Code',
              tabBarIcon: ({ color }) => (
                <FontAwesome size={28} name="qrcode" style={{ marginBottom: -3 }} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="history"
            options={{
              title: 'History',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} color={color} name="history" />
              ),
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </>
  );
}
