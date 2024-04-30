import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { ICONS } from "../../constants/icons";
import useNavigation from "../../hooks/useNavigation";
import useFeedback from "../../hooks/useFeedback";
import { formatCurrency } from "../../utils/formatCurrency";
import useWishlist from "../../hooks/useWishlist";
import FavoriteButton from "../FavoriteButton";
import LoadingSpinner from "../LoadingSpinner";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Skeleton } from '@rneui/themed';
const ProductCard = ({ product }) => {

  const {
    sale_price,
    regular_price
  } = product;

  const { go_to_product_detail } = useNavigation();

  const { get_average_rating, isLoading } = useFeedback(product._id);

  if (isLoading) return <LoadingSpinner />;

  const colorVariation = product.variation[0];

  const onSale = regular_price - sale_price > 0;

  const salePercentage = (
    ((regular_price - sale_price) / regular_price) *
    100
  ).toFixed(1);

  return (
    <TouchableOpacity
      className="bg-white"
      onPress={() => go_to_product_detail(product.slug)}
    >
      <View className="w-full  rounded-lg items-center">
        <View className="w-full  rounded-lg ">
          <View className="px-3">
            <Image
              source={{ uri: product.thumbs[0] }}
              style={{ width: '100%', height: 160, marginTop: 24 }}
              resizeMode="contain"
              PlaceholderContent={
                <LoadingSpinner/>
              }
            />
            <View className="absolute top-0 right-0 m-2">
              <FavoriteButton id={product._id} />
            </View>
          </View>
          {onSale && (
            <View className="z-10 absolute left-[-5px] top-4">
              <LinearGradient start={{ x: 0.8, y: 0.1 }}
                end={{ x: 0.1, y: 1 }}
                colors={['#961200', '#c2560a']}
                className="rounded-sm  px-1 py-1 self-end"
              >
                <Text className="text-white text-[11px]">SALE</Text>
              </LinearGradient>
              <View className='absolute top-[21px] left-[0px] border-b-yellow-800 border-b-4 border-r-[5px] border-r-transparent rotate-180'></View>
            </View>
          )}
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
                <View className="flex flex-row  items-center">
                  <Text className="text-sm font-urbanistMedium">{product.type.name}</Text>
                  <View className="border-r border-grey4 h-4 mx-2"></View>
                </View>
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
