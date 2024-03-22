import { View, Text, TouchableOpacity } from "react-native";
import Avatar from "../Avatar";

export default function UserBriefCard() {
  return (
    <View className="flex-row items-center bg-white p-2 rounded shadow">
      <View className="mr-5">
        <Avatar size="large" src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" shape="rounded" />
      
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
