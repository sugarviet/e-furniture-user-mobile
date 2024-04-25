import React from "react";
import { Image, Text, Pressable, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../constants/image";
import QuantityOption from "../QuantityOption";
import Icon from "../Icon";
import { formatCurrency } from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";
import CheckBox from "react-native-check-box";
import ProductVariationList from "../ProductVariationList";
import { Swipeable } from "react-native-gesture-handler";
import { ICONS } from "../../constants/icons";
import { MaterialIcons } from "@expo/vector-icons";
import useNavigation from "../../hooks/useNavigation";

function CartCard({ cart, removeFromCart }) {
  const {
    decreaseQuantity,
    increaseQuantity,
    addToPurchaseItems,
    isInPurchaseItems,
    updateVariation,
  } = useCart();
  const { variation, select_variation } = cart;
  const onSale = cart.regular_price - cart.sale_price > 0;
  const subPrice = select_variation.reduce(
    (total, cur) => total + cur.sub_price,
    0
  );

  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={() => removeFromCart(cart.code)} className="bg-[#EF4949] w-32 mb-3 flex justify-center items-center">
        <Icon source={IMAGES.trash_white} className="w-[25px] h-[25px]" />
      </TouchableOpacity>
    )
  }

  const { go_to_product_detail } = useNavigation();

  return (
    <Swipeable renderRightActions={rightSwipe} overshootRight={false}>
      <View className="bg-white shadow-sm px-5 py-5 mb-3">
        <Pressable onPress={() => go_to_product_detail(cart.slug)} className="flex flex-row gap-3 items-center">
          <CheckBox
            isChecked={isInPurchaseItems(cart)}
            onClick={() => addToPurchaseItems(cart)}
          />
          <Image
            resizeMode="contain"
            className="rounded-xl"
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
            </View>
            <View className="pt-4">
              <ProductVariationList
                onUpdate={(updated_select_variation) => {
                  updateVariation({
                    ...cart,
                    select_variation: updated_select_variation,
                  });
                }}
                itemClassName="w-6 h-6"
                selectVariation={select_variation}
                data={variation}
              />
            </View>
            <View className="flex flex-row items-center justify-between w-[215px]">
              <View>
                {onSale && (
                  <Text className="text-sm line-through text-gray-400 font-urbanistSemiBold">
                    {formatCurrency(cart.regular_price)}
                  </Text>
                )}
                <Text className="text-sm  font-urbanistSemiBold">
                  {formatCurrency(cart.sale_price + subPrice)}
                </Text>
              </View>
              <QuantityOption
                onMinus={() => decreaseQuantity(cart.code)}
                onPlus={() => increaseQuantity(cart.code)}
                value={cart.quantity_in_cart}
                name="cart"
                className="px-4 py-2"
              />
            </View>
          </View>
        </Pressable>
      </View>
    </Swipeable>
  );
}

export default CartCard;
