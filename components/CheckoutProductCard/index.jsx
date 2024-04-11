import React from "react";
import { Image, Text, View } from "react-native";
import useCart from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import ProductVariationList from "../ProductVariationList";
import ProductVariation from "../ProductVariation";

function CheckoutProductCard({ cart }) {

  const { variation, select_variation } = cart;

  console.log("variation", cart);
  const onSale = cart.regular_price - cart.sale_price > 0;
  const subPrice = select_variation.reduce(
    (total, cur) => total + cur.sub_price,
    0
  );
  return (
    <View className="bg-white shadow-sm px-5 py-5 mb-3 rounded-xl">
      <View className="flex flex-row gap-3 items-center">
        <Image
          resizeMode="contain"
          className="rounded-xl"
          style={{ width: 100, height: 100 }}
          source={{
            uri: cart.thumbs[0],
          }}
        />
        <View style={{ flex: 1 }} className="pt-2">
          <View className="flex flex-row items-center justify-between">
            <Text
              numberOfLines={2}
              className="text-[18px] font-urbanistExtraBold max-w-[180px]"
            >
              {cart.name}
            </Text>
          </View>
          <View className="pt-2">
            {select_variation.map((item, i) => {
              const { variation_id, property_id } = item;
              const currentVariation = variation.find(
                (i) => i._id === variation_id
              );
              currentVariation.properties =
                currentVariation.properties.filter(
                  (item) => item._id === property_id
                );
              return (
                <ProductVariation
                  key={i}
                  currentVariation={currentVariation}
                  variation={currentVariation}
                  className="text-[10px] w-6 h-6"
                />
              );
            })}
          </View>
          <View className="flex flex-row items-center justify-between">
            <View className="mt-2">
              {onSale && (
                <Text className="text-sm line-through text-gray-400 font-urbanistSemiBold">
                  {formatCurrency(cart.regular_price)}
                </Text>
              )}
              <Text className="text-sm  font-urbanistSemiBold">
                {formatCurrency(cart.sale_price + subPrice)}
              </Text>
            </View>
            <View
              className={
                "flex justify-center items-center bg-[#f3f3f3] rounded-[50%] h-8 w-8"
              }
            >

              <Text className="font-urbanistBold text-[14px]">
                {cart.quantity_in_cart}
              </Text>

            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CheckoutProductCard;
