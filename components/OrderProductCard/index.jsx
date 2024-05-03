import React, { useMemo } from 'react';
import { Pressable, Text, View } from "react-native";
import { formatCurrency } from '../../utils/formatCurrency';
import useNavigation from '../../hooks/useNavigation';
import OrderProductBriefInfo from '../OrderProductBriefInfo';
import OrderStatusButton from '../OrderStatusButton';
import DeliveryTrackingBrief from '../DeliveryTrackingBrief';

const OrderProductCard = ({ orderData, state }) => {
  const { go_to_order_detail } = useNavigation();

  const orderState = useMemo(() => {
    return orderData.order_tracking[orderData.order_tracking.length - 1].name;
  }, [orderData]);

  const lengthOfProduct = orderData.order_products.length;

  const currentState = orderData.current_order_tracking.name

  return (
    <View className="pt-2 mx-2">
      <Pressable
        onLongPress={() => { }}
        onPress={() => {
          go_to_order_detail(orderData._id);
        }}
        className="bg-white shadow-sm px-2 pt-2 rounded-sm mb-1"
      >
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[14px] font-urbanistRegular">Order ID: {orderData.order_code}</Text>
          <View className="bg-[#ececec] px-4 py-2 rounded-lg">
            <Text className="text-[12px] font-urbanistBold">{orderState}</Text>
          </View>
        </View>

        <OrderProductBriefInfo orderProduct={orderData.order_products.slice(0, 1)} state={state} orderCode={orderData.order_code} />

        {lengthOfProduct > 1 &&
          <View className="border-t border-grey5">
            <Text className="text-[12px] font-urbanistLight text-center text-grey1 py-2">See more product</Text>
          </View>}

        <View className="border-y border-grey5 flex flex-row justify-between items-center py-4">
          <Text className="text-[12px] font-urbanistLight text-grey1">{lengthOfProduct} products</Text>
          <Text className="font-urbanistSemiBold text-[16px]">Order Total: <Text className="font-urbanistSemiBold text-[14px]">{formatCurrency(orderData.order_checkout.final_total)}</Text></Text>
        </View>

        <DeliveryTrackingBrief data={orderData} />

        <View className="flex flex-row items-center">
          {currentState === "Pending" &&
            <Text className="text-grey2 font-urbanistRegular text-[11px] max-w-[250px] pr-4">Your order must be paid within 24 hours. If not, your order will be cancelled.</Text>
          }
          {currentState === "Cancelled" && orderData.order_checkout.is_paid &&
            <Text className="text-grey2 font-urbanistRegular text-[11px] max-w-[250px] pr-4">Waiting eFurniture staff refund money to your bank account.</Text>
          }

          <OrderStatusButton className="items-end" type={orderState} data={orderData} />
        </View>
      </Pressable>
    </View>
  );
};

export default OrderProductCard;
