import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { CameraView, Camera } from 'expo-camera/next';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState<any>(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: any) => {
    let id = Math.floor(Math.random() * 10000) + 1;
    setScanned(true);

    let oldData = await AsyncStorage.getItem('qrcodes');

    if (oldData) {
      let json = JSON.parse(oldData);

      await AsyncStorage.setItem('qrcodes', JSON.stringify([...json, { id, data }]));
    } else {
      await AsyncStorage.setItem(
        'qrcodes',
        JSON.stringify([
          {
            id,
            data,
          },
        ])
      );
    }

    router.push(`/scanner/${data}`);
  };

  return (
    <View className="flex-1 flex-col justify-between">
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        style={StyleSheet.absoluteFillObject}
      />

      <View className="w-4/5 max-w-xl rounded-md px-2 py-4 bg-[#1a1d23c3] self-center mt-20">
        <Text className="text-white font-semibold text-lg text-center">Scan QR Code </Text>
      </View>

      <View className="self-center animate-pulse">
        <Ionicons size={300} name="scan-outline" color="white" />
      </View>

      <TouchableOpacity
        onPress={() => router.replace('/(tabs)')}
        activeOpacity={1}
        className="self-center rounded-full w-50 h-50 bg-[#1a1d23c3] mb-20"
      >
        <Ionicons size={60} name="close-outline" color="white" />
      </TouchableOpacity>
    </View>
  );
}
