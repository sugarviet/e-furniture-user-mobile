import { useState } from "react";
import { Image, ImageBackground } from "react-native";
import { View, FlatList, Pressable, Text } from "react-native";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import { get_flash_sale_today } from "../../api/flashSaleApi";
import useNavigation from "../../hooks/useNavigation";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";
import { formatTime } from '../../utils/formatDate';

function FlashSaleBgSlider({ data }) {

    const { go_to_flash_sale } = useNavigation();

    if (!data.length) return null;

    return (

        <View className="flex flex-col">
            <View className="flex flex-row justify-between my-2 items-center">
                <Image source={IMAGES.flashsale} className="w-[100px] h-4"></Image>
                <View>
                    <Text className="text-sm font-urbanistBold">See All Deals</Text>
                </View>
            </View>
            <View className="my-[6px] relative">
                <FlatList
                    horizontal
                    data={data[0].FlashSales}
                    keyExtractor={(item) => item._id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={go_to_flash_sale}
                            className={`mr-2 pb-1 flex items-center border-[#e7e7e7] border bg-white`}
                        >
                            <Image
                                source={{ uri: item.background }}
                                resizeMode="cover"
                                className={`w-36 h-36`}

                            />
                            <View className="" >
                                <Text className="text-[12px] text-center font-urbanistBold text-black max-w-[100] pt-1 uppercase py-2">{item.name}</Text>
                            </View>
                            <View className="z-10 absolute right-[-5px] top-2">
                                <View className="z-20 bg-yellow-300 w-[36px] h-5 text-white flex justify-center items-center pl-2">
                                    <Text className="text-orange-600 font-urbanistBold text-[11px]">
                                        SALE
                                    </Text>
                                </View>
                                <View className='absolute top-5 right-[1px] border-b-yellow-700 border-b-4 border-r-4 border-r-transparent rotate-90'></View>
                            </View>
                            <Icon className="absolute top-2 right-3 z-10" source={IMAGES.flash_sale_icon} style={{ width: 26, height: 20 }}></Icon>
                        </Pressable>
                    )}
                />
            </View>
        </View>

    );
};

export default withFetchDataWithAuth(
    FlashSaleBgSlider,
    get_flash_sale_today
);