import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ICONS } from "../../constants/icons";
import useNavigation from "../../hooks/useNavigation";
import useFeedback from "../../hooks/useFeedback";
import { formatCurrency } from "../../utils/formatCurrency";
import useWishlist from "../../hooks/useWishlist";
import FavoriteButton from "../FavoriteButton";
import LoadingSpinner from "../LoadingSpinner";

const ProductCard = ({ product }) => {
  const { go_to_product_detail } = useNavigation();

  const { get_average_rating, isLoading } = useFeedback(product._id);

  if (isLoading) return <LoadingSpinner />;

  const colorVariation = product.variation[0];

  return (
    <TouchableOpacity
      className="bg-white"
      onPress={() => go_to_product_detail(product.slug)}
    >
      <View className="w-full  rounded-lg overflow-hidden items-center">
        <View className="w-full  rounded-lg overflow-hidden">
          <View className="relative px-3">
            <Image
              source={{ uri: product.thumbs[0] }}
              className="w-full h-40 overflow-hidden rounded-lg mt-6 object-center"
              resizeMode="contain"
            />
            <View className="absolute top-0 right-0 m-2">
              <FavoriteButton id={product._id} />
            </View>
          </View>

          <View className="pt-2 px-4 flex flex-row items-center">
            <View className="flex-1">
              <Text className="text-md font-semibold" numberOfLines={1}>
                {product.name}
              </Text>
              <View className="flex-row my-2">
                {colorVariation.properties.map((property, i) => {
                  const { value } = property;
                  return (
                    <View
                      style={{
                        backgroundColor: value,
                        transform: `translateX(-${12 * i}rem)`,
                      }}
                      className="rounded-full w-6 h-6  border border-grey5"
                      key={i}
                    ></View>
                  );
                })}
              </View>
              <View className="flex flex-row items-center pb-2 border-b-grey5">
                <FontAwesome5
                  name={ICONS.fa_star_rating}
                  size={16}
                  color="black"
                />
                <Text className="text-[11px] ml-2 font-urbanistMedium">
                  {get_average_rating()}
                </Text>
              </View>
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-zinc-950 font-bold">
                  {formatCurrency(product.sale_price)}
                </Text>
                <Text className="text-[11px] font-urbanistMedium">
                  {product.sold} sold
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
