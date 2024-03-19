import {
    FontAwesome5
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { ICONS } from "../../constants/icons";
const product = {
  id: 1,
  name: "Mid Century Sofa",
  sold: "9.742",
  price: "10.000.000VND",
  image:
    "https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1710746885~exp=1710750485~hmac=5daff58b0442d6c3540e68bbf6fb30f07b7e4d802e0ee1b24d02b507a56f8f07&w=826",
};

const ProductCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: COLORS.white,
        marginTop: "20%",
      }}
    >
      <View className="w-48 bg-white border border-gray-300 rounded-lg overflow-hidden">
        <View className="relative px-3">
          <Image
            source={{ uri: product.image }}
            className="w-full h-40"
            resizeMode="cover"
          />
          {/* Favourite icon */}
          <TouchableOpacity
            className="absolute top-0 right-0 m-2"
            onPress={toggleFavorite}
          >
            <Text
              style={
                isFavorited
                  ? { color: "#ff0000", fontSize: 25 }
                  : { color: "#808080", fontSize: 25 }
              }
            >
              &#x2665;
            </Text>
          </TouchableOpacity>
        </View>
        <View className="pt-4 px-4 flex flex-row items-center">
          <View className="flex-1">
            <Text className="text-lg font-bold mb-2">{product.name}</Text>
            <View className="flex flex-row pt-2 items-center pb-4 border-b-grey5">
              <FontAwesome5
                name={ICONS.fa_star_rating}
                size={16}
                color="black"
              />
              <Text className="text-[11px] ml-2 font-urbanistMedium">4.8</Text>
              <View className="bg-[#ececec] px-2 py-1 rounded-md mr-4 ml-3">
                <Text className="text-[11px] font-urbanistMedium">
                  9.742 sold
                </Text>
              </View>
            </View>
            <Text className="text-zinc-950 font-bold mb-3">
              {product.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
