import { get_address_default_by_user } from "../../api/addressApi";
import { IMAGES } from "../../constants/image";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import useNavigation from "../../hooks/useNavigation";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon2D from "../Icon2D";

function DefaultAddressCard({ data }) {
  const { go_to_address_book } = useNavigation();

  const { account_id, phone, address, province, ward, district } = data;
  const { first_name, last_name } = account_id;

  console.log(data);

  return (
    <TouchableOpacity onPress={go_to_address_book}>
      <View className="flex-row justify-between items-center bg-white px-3 py-4 shadow-sm">
        <View className="flex-row">
          <View>
            <Icon2D name="location" size={20} activated="black" />
          </View>
          <View className="ml-2">
            <Text className="font-urbanistSemiBold">Delivery Address</Text>
            {data ? (
              <View>
                <View className="flex-row items-center mt-1">
                  <Text className="text-gray-500 text-sm">{`${last_name} ${first_name}`}</Text>
                  <Text className="text-gray-500 text-sm">|</Text>
                  <Text className="text-gray-500 text-sm">{phone}</Text>
                </View>
                <Text className="text-gray-500 text-sm">{address}</Text>
                <Text className="text-gray-500 text-sm">{`${ward} ${district} ${province}`}</Text>
              </View>
            ) : (
              <Text className="text-xs font-urbanist">
                Please select address
              </Text>
            )}
          </View>
        </View>
        <Image
          className="w-6 h-6 text-black"
          source={IMAGES.right_arrow_black}
        />
      </View>
    </TouchableOpacity>
  );
}

export default withFetchDataWithAuth(
  DefaultAddressCard,
  get_address_default_by_user
);
