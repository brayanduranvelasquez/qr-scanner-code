import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, presentation: 'fullScreenModal', fullScreenGestureEnabled: true }}
      />
      <Stack.Screen name="[data]" options={{ headerShown: false }} />
    </Stack>
  );
}
