import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import ButtonModal from "../ButtonModal";
import useNavigation from "../../hooks/useNavigation";
import { useUserStore } from "../../stores/useUserStore";

const AddAddressForm = () => {
  const { control, handleSubmit } = useForm();
  const { go_to_region_select } = useNavigation();

  const { region } = useUserStore();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View className="flex-1 relative bg-white">
      <ScrollView className="pt-[25px] mb-24 h-full px-5">
        <View>
          <Text className="text-[16px] font-urbanistBold">First name*</Text>
          <FormInput control={control} type="first_name" />
        </View>
        <View>
          <Text className="text-[16px] font-urbanistBold pt-2">Last name*</Text>
          <FormInput control={control} type="last_name" />
        </View>
        <View>
          <Text className="text-[16px] font-urbanistBold pt-2">
            Phone number*
          </Text>
          <FormInput control={control} type="phone" />
        </View>
        <TouchableOpacity onPress={go_to_region_select}>
          <Text className="text-[16px] font-urbanistBold pt-2">
            Province, District, Ward
            {region && `${region.district.name} ${region.ward.name}`}
          </Text>
        </TouchableOpacity>
        <View className="pb-12">
          <Text className="text-[16px] font-urbanistBold pt-2">Address*</Text>
          <FormInput control={control} type="address" />
        </View>
      </ScrollView>
      <Pressable
        className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-t-grey5 px-5 bg-white"
        onPress={handleSubmit(onSubmit)}
      >
        <View className="flex justify-center h-full">
          <ButtonModal type="addNewAddress">
            <View className="flex flex-row items-center">
              <Text className="text-white font-urbanistSemiBold">Add</Text>
            </View>
          </ButtonModal>
        </View>
      </Pressable>
    </View>
  );
};
export default AddAddressForm;
