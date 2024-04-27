import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Pressable, Text, View } from "react-native";
import { ICONS } from "../../constants/icons";
import useNavigation from '../../hooks/useNavigation';
import OrderProductBriefInfo from '../OrderProductBriefInfo';
import OrderStatusButton from '../OrderStatusButton';
import { formatCurrency } from '../../utils/formatCurrency';
import DeliveryTrackingBrief from '../DeliveryTrackingBrief';

const OrderProductCard = ({ orderData, state }) => {

  const { go_to_order_detail } = useNavigation();

  const orderState = orderData.order_tracking[orderData.order_tracking.length - 1].name

  const lengthOfProduct = orderData.order_products.length

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
            <Text className="text-[12px] font-urbanistBold"> {orderData.order_tracking[orderData.order_tracking.length - 1].name}</Text>
          </View>
        </View>

        <OrderProductBriefInfo orderProduct={orderData.order_products.slice(0, 1)} state={state} />

        {lengthOfProduct > 1 &&
          <View className="border-t border-grey5">
            <Text className="text-[12px] font-urbanistLight text-center text-grey1 py-2">See more product</Text>
          </View>}

        <View className="border-y border-grey5 flex flex-row justify-between items-center py-4">
          <Text className="text-[12px] font-urbanistLight text-grey1">{lengthOfProduct} products</Text>
          <Text className="font-urbanistSemiBold text-[16px]">Order Total: <Text className="font-urbanistSemiBold text-[14px]">{formatCurrency(orderData.order_checkout.final_total)}</Text></Text>
        </View>

        <DeliveryTrackingBrief data={orderData} />

        <OrderStatusButton className="items-end" type={orderState} data={orderData} />

      </Pressable>
    </View>
  );
};

export default OrderProductCard;
