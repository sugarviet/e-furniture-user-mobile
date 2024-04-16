import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";
import Icon2D from "../Icon2D";
import useNavigation from "../../hooks/useNavigation";
import { classNames } from "../../utils/classNames";
import { useUpdate } from "../../hooks/api-hooks";
import {
  get_address_default_by_user,
  set_address_default_by_user,
  get_all_address
} from "../../api/addressApi";
import useNotification from "../../hooks/useNotification";
import { useQueryClient } from "@tanstack/react-query";

const AddressCard = ({ data }) => {

  const queryClient = useQueryClient();
  const { success_message, error_message } = useNotification();
  const { go_to_edit_address, go_back } = useNavigation();

  const { mutate } = useUpdate(
    set_address_default_by_user(data._id),
    undefined,
    () => {
      // go_back();
      queryClient.invalidateQueries(get_all_address());
      success_message("address", "set_default");
    },
    () => {
      error_message("address", "set_default");
    },

  );


  return (
    <TouchableOpacity
      onPress={() => {
        mutate({});
      }}
    >
      <View className="flex-row bg-white flex gap-1 items-center px-3 py-4 shadow-sm">
        <View className="w-16 h-16 rounded-full bg-[#e3e3e3] flex justify-center items-center mr-3">
          <View
            className={classNames(
              "w-12 h-12 rounded-full flex justify-center items-center",
              data.is_default ? "bg-black" : "bg-black"
            )}
          >
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
            <Text>|</Text>
            <Text className="font-bold text-sm">{data.phone}</Text>
          </View>
          <Text className="font-urbanistMedium text-grey2 pt-1">
            {data.address}
          </Text>
          <Text className="font-urbanistMedium text-grey2 pt-1">
            {data.ward}, {data.district}, {data.province}
          </Text>
          {data.is_default && (
            <Text className="mt-2">
              <View className="border border-black p-1">
                <Text className="text-xs">Default</Text>
              </View>
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => go_to_edit_address({ address: JSON.stringify(data) })}
          className="w-12 h-12 flex justify-center items-center"
        >
          <Icon source={IMAGES.edit} className="w-[22px] h-[22px]" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default AddressCard;
