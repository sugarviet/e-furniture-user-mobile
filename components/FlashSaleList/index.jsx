import { useState } from "react";
import { ImageBackground } from "react-native";
import { View, FlatList, Pressable, Text } from "react-native";

const flashSale = [
    {
        id: 1,
        name: 'Happy MU 10-0 Chelsea',
        discount: '30%',
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_aeva36.png',
        description: "Happy for the sweet victory of the red devils",
    },
    {
        id: 2,
        name: 'New Arrivals',
        discount: '12%',
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_1_o0ad5x.png',
        description: "New collection with many new products launched",
    },
    {
        id: 3,
        name: 'Hùng Kings Festival',
        discount: '15%',
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_3_mjpx4y.png',
        description: "Celebrate the Hung King day of Vietnam",
    },
    {
        id: 4,
        name: 'Liberation Day',
        discount: '15%',
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_2_wb1znh.png',
        description: "Happy Vietnam Liberation Day",
    },
    {
        id: 5,
        name: 'Hùng Kings Festival',
        discount: '15%',
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_3_mjpx4y.png',
        description: "Celebrate the Hung King day of Vietnam",
    },
    {
        id: 6,
        name: 'Liberation Day',
        discount: '15%',
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_2_wb1znh.png',
        description: "Happy Vietnam Liberation Day",
    }
]

const STATUS = {
    defaultPresable: "border-[#e7e7e7] border",
    activePresable: "border-black border",
};

const FlashSaleList = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const handleCategorySelect = (id) => {
        setActiveCategory(id);
    };
    return (
        <View className="my-[6px]">
            <FlatList
                horizontal
                data={flashSale}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ImageBackground
                        imageStyle={{ width: 80, height: 80, marginLeft: 80, marginTop: 10 }}
                        source={{ uri: item.url }}
                        resizeMode="contain"
                        className={`w-40 h-28 bg-[#e7e7e7] rounded-md mx-1  ${activeCategory === item.id
                            ? STATUS.activePresable
                            : STATUS.defaultPresable
                            }`}

                    >
                        <Pressable className="px-3 pt-1" onPress={() => handleCategorySelect(item.id)}>
                            <Text className="text-[24px] font-urbanistBlack">{item.discount}</Text>
                            <Text className="text-[14px] font-urbanistBold text-black max-w-[90px]">{item.name}</Text>
                            <Text className="text-[10px] font-urbanistMedium text-black max-w-[100px]">{item.description}</Text>
                        </Pressable>
                    </ImageBackground>
                )}
            />
        </View>
    );
};

export default FlashSaleList;
