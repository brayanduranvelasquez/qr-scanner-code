import Button from '@/components/Button';
import { AntDesign } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Data() {
  const { data } = useLocalSearchParams<{ data: string }>();

  return (
    <View className="flex-1 justify-between items-center flex-col">
      <StatusBar style="dark" />

      <View className="mt-20 text-center justify-center flex-col space-y-4">
        <AntDesign size={160} color="green" name="checkcircleo" style={{ alignSelf: 'center' }} />

        <Text className="text-gray-600 text-3xl font-bold text-center">QR Code Decoded!</Text>
      </View>

      <View className="w-full px-6">
        <Text className="text-gray-600 text-2xl text-center">
          The result is:
          <Text className="text-gray-600 text-2xl font-bold"> {data}</Text>
        </Text>
      </View>

      <View className="mb-24 flex-row space-x-3">
        <Button outline onPress={() => router.push('/scanner/')}>
          Scan again
        </Button>
        <Button outline onPress={() => router.push('/(tabs)/history')}>
          History Scanning
        </Button>
      </View>
    </View>
  );
}
