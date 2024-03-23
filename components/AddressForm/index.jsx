import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import ButtonModal from "../ButtonModal";
import { useLocalSearchParams } from "expo-router";

const TYPES = {
    add: {
        trigger: "add"
    },
    edit: {
        trigger: "edit"
    },

};

const AddressForm = ({ type }) => {

    const params = useLocalSearchParams();
    const address = params;

    const { trigger } = TYPES[type];

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {

        if (trigger === "add") console.log("add", data)
        if (trigger === "edit") console.log("edit", data)

    };

    return (
        <View className="h-full relative bg-white">
            <ScrollView className="pt-[25px] mb-24 h-full px-5">
                <View>
                    <Text className="text-[16px] font-urbanistBold">First name*</Text>
                    <FormInput control={control} type="first_name" defaultValue={address.first_name || ""} />
                </View>
                <View>
                    <Text className="text-[16px] font-urbanistBold pt-2">Last name*</Text>
                    <FormInput control={control} type="last_name" defaultValue={address.last_name || ""} />
                </View>
                <View>
                    <Text className="text-[16px] font-urbanistBold pt-2">Phone number*</Text>
                    <FormInput control={control} type="phone" defaultValue={address.phone || ""} />
                </View>
                <View>
                    <Text className="text-[16px] font-urbanistBold pt-2">Province</Text>
                    <FormInput control={control} type="province" />
                </View>
                <View>
                    <Text className="text-[16px] font-urbanistBold pt-2">District*</Text>
                    <FormInput control={control} type="district" defaultValue={address.district || ""} />
                </View>
                <View>
                    <Text className="text-[16px] font-urbanistBold pt-2">Ward*</Text>
                    <FormInput control={control} type="ward" defaultValue={address.ward || ""} />
                </View>
                <View className="pb-12">
                    <Text className="text-[16px] font-urbanistBold pt-2">Address*</Text>
                    <FormInput control={control} type="address" defaultValue={address.address || ""} />
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
}
export default AddressForm;