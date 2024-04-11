import { useState } from "react";
import { Image, ImageBackground } from "react-native";
import { View, FlatList, Pressable, Text } from "react-native";

const STATUS = {
    defaultPresable: "border-[#e7e7e7] border",
    activePresable: "border-black border",
};

const FlashSaleList = ({ data,activeFlashSale,handleCategorySelect }) => {

    return (
        <View className="my-[6px]">
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => handleCategorySelect(item._id)}
                        className={`mx-2 px-2 pt-2 pb-1 w-[105px] h-[110px] flex items-center ${activeFlashSale === item._id
                            ? STATUS.activePresable
                            : STATUS.defaultPresable
                            }`}
                    >
                        <Image
                            source={{ uri: item.background }}
                            resizeMode="cover"
                            className={`w-16 h-16 rounded-md`}

                        />
                        <View className="" >
                            <Text className="text-[12px] text-center font-urbanistBold text-black max-w-[100] pt-1 uppercase">{item.name}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default FlashSaleList;
