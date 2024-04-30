import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { get_order_detail_by_id } from '../../api/orderHistoryApi'
import Icon from '../Icon'
import { ICONS } from '../../constants/icons'
import { IMAGES } from '../../constants/image'
import { withFetchDataWithAuth } from '../../hocs/withFetchDataWithAuth'
import OrderProductBriefInfo from '../OrderProductBriefInfo'
import { formatCurrency } from '../../utils/formatCurrency'
import useNavigation from '../../hooks/useNavigation'
import ButtonModal from '../ButtonModal'
import OrderStatusButton from '../OrderStatusButton'
import { formatDate, formatTime } from '../../utils/formatDate'
import DepositPrice from '../DepositPrice'


const OrderDetail = ({ data }) => {
    
    console.log("detail",data);

    const { go_to_delivery_tracking } = useNavigation();

    const orderState = data.order_tracking[data.order_tracking.length - 1].name

    const orderShipping = data.order_shipping

    const isPaidDeposit = data.order_checkout.paid.type === "Deposit";

    const totalPrice = data.order_checkout.total;

    const currentTracking = data.current_order_tracking.name;
    const currentTrackingNote = data.current_order_tracking.note;

    const discount = data.order_checkout.voucher
        ? formatCurrency(
            (data.order_checkout.voucher.value / 100) * totalPrice
        )
        : "0.00đ"

    return (
        <ScrollView className="bg-[#f5f5f5] h-full">
            <View className="bg-blackPrimary w-full px-4 py-6 flex flex-row justify-between items-center">
                <View className="max-w-[300px]">
                    <Text className="text-white text-[16px] font-urbanistSemiBold"  >{data.current_order_tracking.name}</Text>
                    <Text className="text-white text-[14px] font-urbanistRegular pt-3"  >
                        {currentTracking === "Processing" ?
                            `Efurniture staff is preparing the order`
                            : currentTracking === "Done" ?
                                `Order is cancelled with reason: ${currentTrackingNote}`
                                : currentTracking === "Done" ?
                                    "Successfully delivered" :
                                    currentTrackingNote}
                    </Text>
                </View>
                <Icon className="mr-3" source={IMAGES.truck_white} style={{ width: 45, height: 45 }} />
            </View>
            <View className="bg-white px-4 py-3 flex flex-row border-b border-grey6">
                <Ionicons name={ICONS.ionIcons_location} size={20} color="black" />
                <View className="flex flex-col pl-2 max-w-[350px]">
                    <Text className="text-base font-urbanistSemiBold text-blackPrimary tracking-wide pb-1">Billing Address</Text>
                    <Text className="text-sm leading-4 font-urbanistMedium tracking-wide text-grey1">{orderShipping.first_name} {orderShipping.last_name}</Text>
                    <Text className="text-sm leading-4 font-urbanistMedium tracking-wide text-grey1">{orderShipping.phone}</Text>
                    <Text className="text-sm leading-4 font-urbanistMedium tracking-wide text-grey1">{orderShipping.email}</Text>
                    <Text className="text-sm leading-4 font-urbanistMedium tracking-wide text-grey1">{orderShipping.ward}, {orderShipping.district}, {orderShipping.address}</Text>
                </View>
            </View>
            <View className="bg-white px-4 py-3 flex flex-row justify-between">
                <View className="flex flex-row ">
                    <Icon className="mt-[2px]" source={IMAGES.shipping_car} style={{ width: 20, height: 20 }} />
                    <View className="flex flex-col pl-2 max-w-[350px]">
                        <Text className="text-base font-urbanistSemiBold text-blackPrimary tracking-wide pb-1">Delivery Method </Text>
                        <Text className="text-sm leading-4 font-urbanistMedium tracking-wide text-grey1">EFX Express Delivery</Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => {
                        go_to_delivery_tracking({ orderTracking: JSON.stringify(data) });
                    }}
                >
                    <Text className="font-urbanistBold text-sm">
                        VIEW
                    </Text>
                </Pressable>
            </View>
            <View className="bg-white px-4 py-3 mt-2">
                <View className=" border-b border-grey5 ">
                    <OrderProductBriefInfo orderProduct={data.order_products} />
                </View>
                <View className="flex flex-row justify-between pt-2">
                    <Text className="font-urbanistMedium text-[14px] text-grey1">Subtotal</Text>
                    <Text className="font-urbanistMedium text-[14px] text-grey1">{formatCurrency(data.order_checkout.final_total)}</Text>
                </View>
                <View className="flex flex-row justify-between pt-2">
                    <Text className="font-urbanistMedium text-[14px] text-grey1">Discount</Text>
                    <Text className="font-urbanistMedium text-[14px] text-grey1">{discount}</Text>
                </View>
                <View className="flex flex-row justify-between pt-2">
                    <Text className="font-urbanistMedium text-[14px] text-grey1">Shipping</Text>
                    <Text className="font-urbanistMedium text-[14px] text-grey1">0.00đ</Text>
                </View>
                {isPaidDeposit && (
                    <DepositPrice className="font-urbanistMedium text-[14px] text-grey1 pt-2" order={data} />
                )}
                <View className="flex flex-row justify-between pt-2">
                    <Text className="font-urbanistMedium text-[16px]">Order Total</Text>
                    <Text className="font-urbanistSemiBold text-[16px]">{formatCurrency(data.order_checkout.final_total)}</Text>
                </View>
            </View>
            <View className="bg-white px-4 py-3 flex flex-row mt-2">
                <MaterialIcons name="payment" size={20} color="black" style={{ marginTop: 2 }} />
                <View className="flex flex-col pl-2 max-w-[350px]">
                    <Text className="text-base font-urbanistSemiBold text-blackPrimary tracking-wide pb-1">Payment Method </Text>
                    <Text className="text-sm leading-4 font-urbanistMedium tracking-wide text-grey1">{data.payment_method}</Text>
                </View>
            </View>
            <View className="bg-white mt-2 mb-10">
                <View className="px-4 py-3 border-b border-grey5 pb-2">
                    <View className="flex flex-row justify-between">
                        <Text className="text-sm font-urbanistSemiBold text-blackPrimary tracking-wide pb-1">Order ID</Text>
                        <Text className="text-sm leading-4 font-urbanistSemiBold tracking-wide text-blackPrimary">{data.order_code}</Text>
                    </View>
                    <View className="flex flex-row justify-between ">
                        <Text className="text-sm  font-urbanistSemiBold tracking-wide text-grey2 pb-1">Order time</Text>
                        <Text className="text-sm leading-4 font-urbanistSemiBold tracking-wide text-grey2">{formatTime(data.createdAt)}, {formatDate(data.createdAt)}</Text>
                    </View>
                </View>
                <View className="pt-1 px-4 pb-2">
                    <OrderStatusButton type={orderState} data={data} />
                </View>
            </View>

        </ScrollView>
    )
}

export default withFetchDataWithAuth(OrderDetail, get_order_detail_by_id)