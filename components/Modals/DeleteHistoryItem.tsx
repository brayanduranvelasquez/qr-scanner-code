import AsyncStorage from '@react-native-async-storage/async-storage';
import { magicModal } from 'react-native-magic-modal';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Dispatch } from 'react';
import Button from '../Button';

export default function DeleteHistoryItemModal({ id, setQRCodes }: { id: number; setQRCodes: Dispatch<any> }) {
  const handleRemoveItem = async () => {
    let oldData = (await AsyncStorage.getItem('qrcodes')) || '';
    let parsed = JSON.parse(oldData);
    let newData = parsed.filter((item: { id: number }) => item.id !== id);

    if (newData.length > 0) {
      let newJson = JSON.stringify(newData);
      setQRCodes(newData);
      await AsyncStorage.setItem('qrcodes', newJson);
    } else {
      await AsyncStorage.removeItem('qrcodes');
      setQRCodes([]);
    }

    magicModal.hide({ success: true });
  };

  return (
    <View className="bg-white w-11/12 self-center px-4 py-4 rounded-md">
      <View className="flex flex-row gap-1 justify-between items-center rounded-md">
        <Text className="text-xl font-semibold">Notification!</Text>

        <FontAwesome name="close" size={24} color="#444" onPress={() => magicModal.hide({ success: true })} />
      </View>

      <View className="mt-5">
        <Text className="text-lg">Are you sure do you want to delete this result?</Text>
      </View>

      <View className="mt-5">
        <View className="space-y-3">
          <View>
            <Button outline onPress={() => magicModal.hide({ success: true })}>
              Cancel
            </Button>
          </View>

          <View>
            <Button colorType="danger" onPress={handleRemoveItem}>
              Delete
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
