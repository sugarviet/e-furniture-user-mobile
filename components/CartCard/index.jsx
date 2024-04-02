import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../constants/image";
import { ICONS } from "../../constants/icons";
import { AntDesign, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import QuantityOption from "../QuantityOption";
import Icon from "../Icon";
import { formatCurrency } from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";

function CartCard({ cart, handleOpenDeleteModal }) {
  const { decreaseQuantity, increaseQuantity } = useCart();
  console.log(cart);
  return (
    <View className="bg-white shadow-sm px-5 py-5 mb-6">
      <View className="flex flex-row gap-3">
        <Image
          resizeMode="contain"
          className="rounded-3xl"
          style={{ width: 100, height: 100 }}
          source={{
            uri: cart.thumbs[0],
          }}
        />
        <View className="pt-2">
          <View className="flex flex-row items-center justify-between">
            <Text
              numberOfLines={2}
              className="text-[18px] font-urbanistExtraBold max-w-[180px]"
            >
              {cart.name}
            </Text>
            <TouchableOpacity onPress={() => handleOpenDeleteModal(cart)}>
              <Icon source={IMAGES.trash} className="w-[25px] h-[25px]" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center justify-between w-[215px] pt-3">
            <Text className="text-[18px] font-urbanistSemiBold">
              {formatCurrency(cart.sale_price * cart.quantity_in_cart)}
            </Text>
            <QuantityOption
              onMinus={() => decreaseQuantity(cart._id)}
              onPlus={() => increaseQuantity(cart._id)}
              value={cart.quantity_in_cart}
              name="cart"
              className="px-4 py-2"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CartCard;
