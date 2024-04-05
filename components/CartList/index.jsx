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
              key={item.code}
              cart={item}
              handleOpenDeleteModal={handleOpenDeleteModal}
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
                {/* {formatCurrency(getTotalPrice())} */}
              </Text>
            </View>
            <TouchableOpacity
              onPress={go_to_checkout}
              className="w-40 bg-black flex-row h-full items-center justify-center"
            >
              <MaterialIcons size={20} color="white" name={ICONS.mi_checkout} />
              <Text className="text-white font-urbanistSemiBold">
                {/* Check Out {`(${getPurchaseItems().length})`} */}
              </Text>
            </TouchableOpacity>
          </View>
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
              onPress={() => removeFromCart(removeItem.code)}
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
