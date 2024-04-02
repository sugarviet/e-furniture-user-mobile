import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../constants/image";
import QuantityOption from "../QuantityOption";
import Icon from "../Icon";
import { formatCurrency } from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";
import CheckBox from "react-native-check-box";

function CartCard({ cart, handleOpenDeleteModal }) {
  const {
    decreaseQuantity,
    increaseQuantity,
    addToPurchaseItems,
    isInPurchaseItems,
  } = useCart();
  console.log(cart);
  const onSale = cart.regular_price - cart.sale_price > 0;
  return (
    <View className="bg-white shadow-sm px-5 py-5 mb-3">
      <View className="flex flex-row gap-3 items-center">
        <CheckBox
          isChecked={isInPurchaseItems(cart)}
          onClick={() => addToPurchaseItems(cart)}
        />
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
            <View>
              {onSale && (
                <Text className="text-sm line-through text-gray-400 font-urbanistSemiBold">
                  {formatCurrency(cart.regular_price)}
                </Text>
              )}
              <Text className="text-sm  font-urbanistSemiBold">
                {formatCurrency(cart.sale_price)}
              </Text>
            </View>
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
