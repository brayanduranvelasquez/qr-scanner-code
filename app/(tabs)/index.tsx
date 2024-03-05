import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className="flex flex-col items-center justify-center bg-white h-screen">
      <Text className="text-3xl font-bold text-center">Decode QR Codes</Text>

      <View className="w-full mt-3 px-4 justify-center">
        <Text className="text-base text-gray-400 text-center">
          Scan a QR code inside the frame to scan please and avoid shake to get result quickly
        </Text>
      </View>

      <View className="my-14">
        <Image
          source={require('../../assets/images/qr-code-screen.png')}
          style={{ width: 260, height: 300, resizeMode: 'contain', padding: 0, margin: 0 }}
        />
      </View>

      <Link
        href="/scanner/"
        asChild
        className="bg-blue-600 active:bg-blue-700 w-[80%] py-4 rounded-3xl text-white text-center"
      >
        <Text className="text-white text-lg font-semibold text-center">Start Decoding</Text>
      </Link>
    </View>
  );
}
