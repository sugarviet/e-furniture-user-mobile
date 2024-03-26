import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from "react-native";
import { ICONS } from "../../constants/icons";
import OrderProductBriefInfo from '../OrderProductBriefInfo';
import OrderStatusButton from '../OrderStatusButton';


const OrderProductCard = ({ orderData }) => {

  const orderState = orderData.order_tracking[orderData.order_tracking.length - 1].name

  return (
    <View className="pt-2 mx-2">
      <View className="bg-white shadow-sm px-2 pt-2 rounded-sm mb-1">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[14px] font-urbanistRegular">Order ID: {orderData.order_code}</Text>
          <View className="bg-[#ececec] px-4 py-2 rounded-lg">
            <Text className="text-[12px] font-urbanistSemiBold"> {orderData.order_tracking[orderData.order_tracking.length - 1].name}</Text>
          </View>
        </View>

        <OrderProductBriefInfo orderProduct={orderData} />

        <View className="border-b border-grey5 flex justify-between flex-row items-center py-4">
          <View className="flex flex-row gap-2 items-center">
            <FontAwesome5 name="shipping-fast" size={16} color="black" />
            <Text className="font-urbanistLight text-[14px]">Your order is waiting to be approved</Text>
          </View>
          <Entypo name={ICONS.enTypo_arrow_right} size={16} color="black" />
        </View>

        <OrderStatusButton type={orderState} data={orderData} />

      </View>
    </View>
  );
};

export default OrderProductCard;
