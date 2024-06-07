import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import useNavigation from "../../hooks/useNavigation";
import { useUserStore } from "../../stores/useUserStore";
import { IMAGES } from "../../constants/image";
import useAddress from "../../hooks/useAddress";

const AddAddressForm = () => {
  const { control, handleSubmit } = useForm();
  const { addAddress } = useAddress();
  const { go_to_region_select } = useNavigation();

  const { region, setRegion } = useUserStore();

  const onSubmit = (data) => {
    addAddress({ ...data, ...region });
  };

  useEffect(() => {
    return () => {
      setRegion(null);
    };
  }, [setRegion]);

  return (
    <View className="flex-1 relative">
      <ScrollView className="mb-24">
        <View className="my-2">
          <Text className="m-2 text-gray-500">Contact</Text>
          <FormInput control={control} type="phone" />
        </View>
        <View>
          <Text className="m-2 text-gray-500">Address</Text>
          <TouchableOpacity
            className="bg-white flex-row p-2 justify-between items-center"
            onPress={go_to_region_select}
          >
            {region ? (
              <View>
                <Text>{`${region.province}`}</Text>
                <Text>{`${region.district.name}`}</Text>
                <Text>{`${region.ward.name}`}</Text>
              </View>
            ) : (
              <Text className="text-gray-300">Province, District, Ward</Text>
            )}

            <Image
              className="w-4 h-4"
              source={IMAGES.right_arrow_black}
            />
          </TouchableOpacity>
          <FormInput control={control} type="address" />
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-black py-3 mx-1 mt-4"
        >
          <Text className="text-white text-md uppercase text-center font-urbanistBold">
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default AddAddressForm;
