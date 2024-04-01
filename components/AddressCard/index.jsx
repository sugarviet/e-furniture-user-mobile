import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";
import Icon2D from "../Icon2D";
import useNavigation from "../../hooks/useNavigation";

const AddressCard = ({ data }) => {
  const { go_to_edit_address, go_to_address_book, go_to_add_new_address } =
    useNavigation();

  if (!data)
    return (
      <TouchableOpacity onPress={go_to_add_new_address}>
        <View className="flex-row justify-between items-center bg-white px-3 py-4 shadow-sm">
          <View className="flex-row">
            <View>
              <Icon2D name="location" size={20} activated="black" />
            </View>
            <View className="ml-2">
              <Text className="font-urbanistSemiBold">Delivery Address</Text>
              <Text className="text-xs font-urbanist">
                Please select address
              </Text>
            </View>
          </View>
          <Image
            className="w-6 h-6 text-black"
            source={IMAGES.right_arrow_black}
          />
        </View>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity onPress={go_to_address_book}>
      <View className="flex-row bg-white rounded-3xl flex gap-1 items-center px-3 py-4 shadow-sm mx-1">
        <View className="w-16 h-16 rounded-full bg-[#e3e3e3] flex justify-center items-center mr-3">
          <View className="w-12 h-12 rounded-full bg-black flex justify-center items-center">
            <Icon2D name="location" size={20} activated="white" />
          </View>
        </View>
        <View className="flex-1">
          <View className="flex-row items-center gap-4">
            <Text
              className="font-bold text-base max-w-[170px]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {data.account_id.first_name} {data.account_id.last_name}
            </Text>
            {data.default === true && (
              <View className="bg-gray-200 rounded-md p-1">
                <Text className="text-xs">Default</Text>
              </View>
            )}
          </View>
          <Text className="font-bold text-sm">{data.phone}</Text>
          <Text
            numberOfLines={2}
            className="font-urbanistMedium text-grey2 pt-1"
          >
            {data.address} {data.ward} {data.district}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            go_to_edit_address(data, "edit");
          }}
          className="w-12 h-12 flex justify-center items-center"
        >
          <Icon source={IMAGES.edit} className="w-[22px] h-[22px]" />
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default AddressCard;
