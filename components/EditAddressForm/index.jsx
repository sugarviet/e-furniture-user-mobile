import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import FormInput from "../../components/FormInput";
import ButtonModal from "../ButtonModal";
import useNavigation from "../../hooks/useNavigation";
import { useUserStore } from "../../stores/useUserStore";
import { IMAGES } from "../../constants/image";
import { delete_single_address, edit_address, get_all_address } from "../../api/addressApi";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteAuth, useUpdate } from "../../hooks/api-hooks";
import useNotification from "../../hooks/useNotification";

const EditAddressForm = () => {

    const params = useLocalSearchParams();
    const data = JSON.parse(params.address);

    const queryClient = useQueryClient();

    const { control, handleSubmit } = useForm();

    const { go_to_region_select, go_back } = useNavigation();

    const { region, setRegion } = useUserStore();

    console.log("ghiu", { ...region });

    const { success_message, error_message } = useNotification();

    const { account_id, phone, address, province, ward, district } = data;
    const { first_name, last_name } = account_id;

    const { mutate } = useUpdate(
        edit_address(data._id),
        undefined,
        (data) => {
            console.log(data);
            queryClient.invalidateQueries(get_all_address());
            success_message('address', 'edit')
            go_back();
        },
        () => {
            error_message('address', 'edit')
        }
    );

    const { mutate: delete_address } = useDeleteAuth(
        delete_single_address(data._id),
        undefined,
        () => {
            queryClient.invalidateQueries(get_all_address());
            success_message("address", "delete");
            go_back();
        },
        () => {
            error_message("address", "delete");
        }
    );

    const onSubmit = (data) => {
        region ?
            mutate({ ...data, district: region.district.name, ward: region.ward.name })
            :
            mutate({ ...data, ward: ward, district: district })
    };

    const handleDeleteAddress = (id) => {
        delete_address(id)
    };

    useEffect(() => {
        return () => {
            setRegion(null);
        };
    }, [setRegion]);

    return (
        <View className="h-full relative">
            <ScrollView className="">
                <View className="my-2">
                    <Text className="m-2 pl-1 text-gray-500">First name</Text>
                    <FormInput control={control} type="first_name" defaultValue={first_name} />
                    <Text className="m-2 pl-1 text-gray-500">Last name</Text>
                    <FormInput control={control} type="last_name" defaultValue={last_name} />
                    <Text className="m-2 pl-1 text-gray-500">Phone</Text>
                    <FormInput control={control} type="phone" defaultValue={phone} />
                </View>
                <View>
                    <Text className="m-2 pl-1 text-gray-500">Address</Text>
                    <TouchableOpacity
                        className="bg-white flex-row p-2 justify-between items-center"
                        onPress={go_to_region_select}
                    >
                        {region ? (
                            <View className="pl-1">
                                <Text>{`${region.province}`}</Text>
                                <Text>{`${region.district.name}`}</Text>
                                <Text>{`${region.ward.name}`}</Text>
                            </View>
                        ) : (
                            <View className="pl-1">
                                <Text>{`${province}`}</Text>
                                <Text>{`${ward}`}</Text>
                                <Text>{`${district}`}</Text>
                            </View>
                        )}

                        <Image
                            className="w-4 h-4"
                            source={IMAGES.right_arrow_black}
                        />
                    </TouchableOpacity>
                    <View className="border-t border-grey5">
                        <FormInput control={control} type="address" defaultValue={address} />
                    </View>
                </View>

                <TouchableOpacity onPress={() => handleDeleteAddress(data._id)} className="flex items-center bg-white py-4 px-2 mt-12">
                    <Text className="font-urbanistMedium text-red">Delete Address</Text>
                </TouchableOpacity>
            </ScrollView>
            <Pressable
                className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-t-grey5 px-5 bg-white"
                onPress={handleSubmit(onSubmit)}
            >
                <View className="flex justify-center h-full">
                    <ButtonModal type="addNewAddress">
                        <View className="flex flex-row items-center">
                            <Text className="text-white font-urbanistSemiBold">Update</Text>
                        </View>
                    </ButtonModal>
                </View>
            </Pressable>
        </View>
    );
}
export default EditAddressForm;