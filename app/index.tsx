import { router } from 'expo-router';
import React from 'react';
import { Image, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function Index() {
  return (
    <Onboarding
      showSkip={false}
      onDone={() => router.replace('/(tabs)')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={{ width: 200, height: 300, objectFit: 'contain' }}
              source={require('../assets/images/onboarding/qr.png')}
            />
          ),
          title: <Text className="text-3xl font-semibold">Decode QR Codes</Text>,
          subtitle: (
            <Text className="text-gray-500 px-5 text-center mt-3 leading-5">
              Decoding QR Codes refers to the process of extracting information from a QR code. Once the QR code is
              scanned, the app will display the information stored in the code
            </Text>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={{ width: 200, height: 200, objectFit: 'contain' }}
              source={require('../assets/images/onboarding/history.png')}
            />
          ),
          title: <Text className="text-3xl font-semibold text-center px-6">Your Scanned QR Codes Will Be Saved</Text>,
          subtitle: (
            <Text className="text-gray-500 px-5 text-center mt-3 leading-5">
              It means that the QR codes you recently scanned will be stored for you. This helps you keep track of the
              codes you've used and easily access them later if needed
            </Text>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={{ width: 200, height: 200, objectFit: 'contain' }}
              source={require('../assets/images/onboarding/welcome.png')}
            />
          ),
          title: <Text className="text-3xl font-semibold">Welcome!</Text>,
          subtitle: <Text className="text-gray-500 px-5 text-center mt-3 leading-5">Let's get started</Text>,
        },
      ]}
    />
  );
}
