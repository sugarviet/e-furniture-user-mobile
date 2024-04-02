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

function CartList() {
  const { getCart, isLoading, getTotalPrice, removeFromCart } = useCart();
  const [removeItem, setRemoveItem] = useState(undefined);

  const cartRef = useRef(null);

  const { go_to_checkout } = useNavigation();
  const handleOpenDeleteModal = (item) => {
    cartRef.current?.expand();
    setRemoveItem(item);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={{ height: "100%", backgroundColor: COLORS.grey1 }}>
      <ScrollView style={{ marginBottom: 90, height: "100%", width: "100%" }}>
        <View>
          {getCart().map((item) => (
            <CartCard
              key={item._id}
              cart={item}
              handleOpenDeleteModal={handleOpenDeleteModal}
            />
          ))}
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 w-full h-[100px] shadow-md border-t border-x border-grey5 rounded-t-3xl bg-white">
        <View className="flex flex-row justify-between px-5 pt-5">
          <View className="flex flex-col">
            <Text className="text-[12px] font-urbanistRegular text-grey1">
              Total price
            </Text>
            <Text className="text-[26px] font-urbanistBold">
              {formatCurrency(getTotalPrice())}
            </Text>
          </View>
          <Pressable onPress={go_to_checkout} className="w-[60%]">
            <ButtonModal type="cart">
              <Text className="text-white font-urbanistSemiBold">Checkout</Text>
            </ButtonModal>
          </Pressable>
        </View>
      </View>
      <GorhomeBottomSheet ref={cartRef}>
        <View className="px-6 pb-2 bg-[#fafafa]">
          <View className="border-b border-grey5 pb-5">
            <Text className="text-[24px] font-urbanistBold text-center ">
              Remove From Cart?
            </Text>
          </View>
          <View className="mt-4">
            {removeItem ? <CartCard cart={removeItem} /> : null}
          </View>
        </View>
        <View className="flex flex-row w-full px-12 justify-center">
          <Pressable className="w-[60%] mr-1">
            <TouchableOpacity className="w-full rounded-[40px] h-full pl-2">
              <View clasme="flex flex-row justify-center items-center py-5 rounded-[40px] bg-[#e7e7e7]">
                <Text csNalassName="text-black font-urbanistSemiBold pl-3">
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>
          </Pressable>
          <Pressable className="w-[60%] ml-1">
            <ButtonModal
              onPress={() => removeFromCart(removeItem._id)}
              type="remove"
            >
              <Text className="text-white font-urbanistSemiBold">
                Yes, Remove
              </Text>
            </ButtonModal>
          </Pressable>
        </View>
      </GorhomeBottomSheet>
    </View>
  );
}

export default CartList;
