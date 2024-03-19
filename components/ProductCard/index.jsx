import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { ICONS } from "../../constants/icons";
import InteractiveIcon3D from "../InteractiveIcon3D";
import useNavigation from "../../hooks/useNavigation";
import PressableContainer from "../PressableContainer";

const ProductCard = ({ product }) => {
  const { go_to_product_detail } = useNavigation();
  const handle_go_to_detail = () => {
    go_to_product_detail();
  };
  return (
   <PressableContainer onPress={handle_go_to_detail}>
      <View className="w-48 bg-white border border-gray-300 rounded-lg overflow-hidden m-2 items-center">
        <View className="w-48 bg-white border border-gray-300 rounded-lg overflow-hidden">
          <View className="relative px-3">
            <Image
              source={{ uri: product.image }}
              className="w-full h-40 rounded-lg mt-2"
              resizeMode="cover"
            />
            <View className="absolute top-0 right-0 m-2">
              <InteractiveIcon3D type="heart" />
            </View>
          </View>

          <View className="pt-4 px-4 flex flex-row items-center">
            <View className="flex-1">
              <Text className="text-lg font-bold mb-2" numberOfLines={1}>
                {product.name}
              </Text>
              <View className="flex flex-row pt-2 items-center pb-4 border-b-grey5">
                <FontAwesome5
                  name={ICONS.fa_star_rating}
                  size={16}
                  color="black"
                />
                <Text className="text-[11px] ml-2 font-urbanistMedium">
                  4.8
                </Text>
                <View className="bg-[#ececec] px-2 py-1 rounded-md mr-4 ml-3">
                  <Text className="text-[11px] font-urbanistMedium">
                    {product.sold}
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
      </PressableContainer>
  );
};

export default ProductCard;
