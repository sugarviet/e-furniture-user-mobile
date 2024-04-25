import { useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../constants";
import ButtonModal from "../ButtonModal";
import CartCard from "../CartCard";
import GorhomeBottomSheet from "../BottomSheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import useNavigation from "../../hooks/useNavigation";
import useCart from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import LoadingSpinner from "../LoadingSpinner";
import { MaterialIcons } from "@expo/vector-icons";
import { ICONS } from "../../constants/icons";
import CheckBox from "react-native-check-box";
import EmptyContent from "../EmptyContent";

function CartList() {
  const {
    getCart,
    isLoading,
    getTotalPrice,
    removeFromCart,
    purchaseAll,
    isPurchaseAll,
    getPurchaseItems,
  } = useCart();

  const isEmptyCart = !getCart().length;

  const { go_to_checkout } = useNavigation();

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={{ height: "100%", backgroundColor: COLORS.grey1 }}>
      <ScrollView style={{ marginBottom: 90, height: "100%", width: "100%" }}>
        {isEmptyCart &&
          <View className="pt-16">
            <EmptyContent type="cart" />
          </View>
        }
        <View>
          {getCart().map((item) => (
            <CartCard
              key={item.code}
              cart={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 h-16 shadow-md border-t border-x border-grey5 bg-white">
        <View className="flex-row items-center pl-6">
          <CheckBox
            isChecked={isPurchaseAll()}
            onClick={() => {
              purchaseAll();
            }}
          />
          <View className="flex-row justify-end items-center flex-1">
            <View className="mr-2">
              <Text className="text-xs font-urbanistRegular text-grey1">
                Total price
              </Text>
              <Text className="text-lg font-urbanistBold">
                {formatCurrency(getTotalPrice())}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (!isEmptyCart) {
                  go_to_checkout(getPurchaseItems());
                }
              }}
              className={`w-40 bg-black flex-row h-full items-center justify-center ${isEmptyCart && 'bg-black/30'}`}
            >
              <MaterialIcons size={20} color="white" name={ICONS.mi_checkout} />
              <Text className="text-white font-urbanistSemiBold">
                Check Out {`(${getPurchaseItems().length})`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CartList;
