import { View } from "react-native";
import AddAddressForm from "../../../../../components/AddAddressForm";
import { Stack } from "expo-router";

const Address = () => {
  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: "Add New Address" }} />
      <AddAddressForm />
    </View>
  );
};

export default Address;
