import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ICONS } from "../../constants/icons";
import InteractiveIcon3D from "../InteractiveIcon3D";
import useNavigation from "../../hooks/useNavigation";
import PressableContainer from "../PressableContainer";
import useFeedback from "../../hooks/useFeedback";
import { formatCurrency } from "../../utils/formatCurrency";
import useWishlist from "../../hooks/useWishlist";
import FavoriteButton from "../FavoriteButton";

const ProductCard = ({ product }) => {
  const { go_to_product_detail } = useNavigation();

  const { get_average_rating, isLoading } = useFeedback(product._id);

  if (isLoading) return null;

  return (
    <PressableContainer
      className="w-full"
      onPress={() => go_to_product_detail(product.slug)}
    >
      <View className="w-full  rounded-lg overflow-hidden items-center">
        <View className="w-full  rounded-lg overflow-hidden">
          <View className="relative px-3">
            <Image
              source={{ uri: product.thumbs[0] }}
              className="w-full h-40 rounded-lg mt-2 object-center"
              resizeMode="contain"
            />
            <View className="absolute top-0 right-0 m-2">
              <FavoriteButton id={product._id} />
            </View>
          </View>

          <View className="pt-2 px-4 flex flex-row items-center">
            <View className="flex-1">
              <Text className="text-lg font-bold mb-2" numberOfLines={1}>
                {product.name}
              </Text>
              <View className="flex flex-row items-center pb-2 border-b-grey5">
                <FontAwesome5
                  name={ICONS.fa_star_rating}
                  size={16}
                  color="black"
                />
                <Text className="text-[11px] ml-2 font-urbanistMedium">
                  {get_average_rating()}
                </Text>
                <Text> |</Text>
                <View className="bg-[#ececec] px-2 py-1 rounded-md mr-4 ml-3">
                  <Text className="text-[11px] font-urbanistMedium">
                    {product.sold} sold
                  </Text>
                </View>
              </View>
              <Text className="text-zinc-950 font-bold mb-3">
                {formatCurrency(product.sale_price)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </PressableContainer>
  );
};

export default ProductCard;
