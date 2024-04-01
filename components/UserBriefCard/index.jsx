import { View, Text, TouchableOpacity } from "react-native";

export default function UserBriefCard() {
  return (
    <View className="flex-row items-center bg-white p-2 rounded shadow">
      <View className="mr-5">
    
      </View>
      <View className="flex-1">
        <Text className='font-bold text-lg my-1'>Viet</Text>
        <TouchableOpacity>
          <Text className='font-bold text-sm text-gray-600 my-1'>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
