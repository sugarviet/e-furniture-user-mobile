import { View, Text } from "react-native";
import AddressList from "../../../../components/AddressList";
import { Stack } from "expo-router";

const AddressBook = () => {
  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: "Address Selection" }} />
      <Text className="p-4">Address</Text>
      <AddressList />
    </View>
  );
};

export default AddressBook;
