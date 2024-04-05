import { ScrollView, Text, View, Pressable, Image } from "react-native";
import ButtonModal from "../ButtonModal";
import CartCard from "../CartCard";
import ShippingCard from "../ShippingCard";
import { IMAGES } from "../../constants/image";
import PressableContainer from "../PressableContainer";
import useNavigation from "../../hooks/useNavigation";
import { FontAwesome6 } from "@expo/vector-icons";
import { ICONS } from "../../constants/icons";
import { Entypo } from "@expo/vector-icons";
import Icon from "../Icon";
import useCart from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCheckout } from "../../context/CheckoutContext";
import DefaultAddressCard from "../DefaultAddressCard";
import { useLocalSearchParams } from "expo-router";

export default function OrderConfirm() {
  const { go_to_voucher_list, go_to_payment_list } = useNavigation();
  const { getTotalPrice } = useCart();
  const { dataAfterApplyVoucher, isPriceVoucherLoading } = useCheckout();

  const params = useLocalSearchParams();
  const { data } = params;
  const purchaseItems = JSON.parse(data);

  if (isPriceVoucherLoading) return null;

  return (
    <View className="relative">
      <ScrollView className="mb-32">
        <DefaultAddressCard />
        <View className="border-b border-grey5 pt-6 pb-1">
          <Text className="text-black text-[18px] font-urbanistBold">
            Order List
          </Text>
          <View className="mt-6 mx-1">
            {purchaseItems.map((item) => (
              <CartCard key={item._id} cart={item} />
            ))}
          </View>
        </View>
        <View className="border-b border-grey5 pt-6 pb-1">
          <Text className="text-black text-[18px] font-urbanistBold">
            Shipping Method
          </Text>
          <View className="py-6">
            <ShippingCard />
          </View>
        </View>
        <View className="pt-6">
          <Text className="text-black text-[18px] font-urbanistBold">
            Coupon Code
          </Text>
          <View className="py-6">
            <PressableContainer onPress={go_to_voucher_list}>
              <View className="flex-row bg-white rounded-3xl flex gap-1 items-center justify-between px-5 py-6 shadow-sm mx-1">
                <View className="flex flex-row items-center">
                  <Icon
                    source={IMAGES.coupon}
                    style={{ width: 28, height: 28 }}
                  />
                  <Text className="font-bold text-base pl-3">
                    Choose Coupon
                  </Text>
                </View>
                <View className="">
                  <Entypo
                    name={ICONS.enTypo_arrow_right}
                    size={21}
                    color="black"
                  />
                </View>
              </View>
            </PressableContainer>
            {dataAfterApplyVoucher?.voucher ? (
              <View className="pt-4 flex flex-row gap-2 flex-wrap">
                <View className="bg-black rounded-3xl w-[180px] flex flex-row items-center px-4 py-2">
                  <Text className="text-white font-urbanistBold text-[16px] pr-4">
                    Discount {dataAfterApplyVoucher.voucher.value}% Off
                  </Text>
                  <Pressable>
                    <FontAwesome6 name="xmark" size={14} color="white" />
                  </Pressable>
                </View>
              </View>
            ) : null}
          </View>
        </View>
        <View className="flex-col bg-white rounded-3xl flex gap-4 px-4 py-4 shadow-sm mx-1 mt-4 mb-10">
          <View className="flex flex-row justify-between">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Subtotal
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              {" "}
              {formatCurrency(getTotalPrice())}
            </Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Shipping
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              0đ
            </Text>
          </View>
          <View className="flex flex-row justify-between border-b border-grey5 pb-6">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Discount
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              {dataAfterApplyVoucher
                ? formatCurrency(
                    dataAfterApplyVoucher.old_order_total -
                      dataAfterApplyVoucher.order_total_after_voucher
                  )
                : formatCurrency(0)}
            </Text>
          </View>
          <View className="flex flex-row justify-between pb-3">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Total
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              {dataAfterApplyVoucher
                ? formatCurrency(
                    dataAfterApplyVoucher.order_total_after_voucher
                  )
                : formatCurrency(getTotalPrice())}
            </Text>
          </View>
        </View>
      </ScrollView>

      <Pressable
        onPress={go_to_payment_list}
        className="absolute bottom-0 left-0 right-0 h-32 shadow-md border-t border-x border-grey5 rounded-t-3xl bg-white px-5 pt-5"
      >
        <ButtonModal type="checkout">
          <View className="flex flex-row items-center">
            <Text className="text-white font-urbanistSemiBold pr-4">
              Continue to Payment
            </Text>
            <Icon
              source={IMAGES.right_arrow}
              style={{ width: 16, height: 16 }}
            />
          </View>
        </ButtonModal>
      </Pressable>
    </View>
  );
}
