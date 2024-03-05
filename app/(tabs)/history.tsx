import { FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DeleteHistoryItemModal from '@/components/Modals/DeleteHistoryItem';
import { useEffect, useState } from 'react';
import { magicModal } from 'react-native-magic-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabTwoScreen() {
  const [qrcodes, setQRCodes] = useState<any>([]);

  useEffect(() => {
    const getQrCodes = async () => {
      let data = await AsyncStorage.getItem('qrcodes');

      setQRCodes(data ? JSON.parse(data) : []);
    };

    getQrCodes();
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="bg-white">
        <Text className="font-bold text-3xl text-gray-800 mt-10 text-center">Scanning History</Text>

        <Text className="text-base text-gray-400 mt-5 text-center px-7">
          It will keep track of your last history of scanned QR codes, allowing you to easily access and review them at
          any time
        </Text>

        <View className="w-full border-b border-gray-300 mt-12" />
      </View>

      {qrcodes.length === 0 ? (
        <View className="bg-white justify-center items-center mt-20">
          <Image
            source={require('../../assets/images/empty.png')}
            style={{ width: 250, height: 200, resizeMode: 'contain', padding: 0, margin: 0 }}
          />
          <Text className="font-semibold text-lg text-gray-500 text-center">No QR codes scanned yet</Text>
        </View>
      ) : (
        <FlatList
          data={qrcodes}
          keyExtractor={(item) => item.id}
          className="w-full px-6 pt-8"
          renderItem={({ item, index }) => (
            <>
              <View className="border border-gray-300 rounded-md mb-4 flex flex-row justify-between overflow-hidden">
                <Text className="text-gray-600 px-4 font-semibold py-5">{item.data}</Text>

                <TouchableOpacity
                  className="border-l border-gray-300 px-5 flex justify-center active:bg-red-700"
                  onPress={() => magicModal.show(() => <DeleteHistoryItemModal id={item.id} setQRCodes={setQRCodes} />)}
                >
                  <FontAwesome name="trash-o" size={20} />
                </TouchableOpacity>
              </View>

              {index == qrcodes.length - 1 && <View className="mb-10" />}
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
}
