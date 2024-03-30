import { ScrollView, Text, View, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import OrderStep from '../OrderStep';
import Icon from '../Icon';
import { IMAGES } from '../../constants/image';
import { formatAddDate } from '../../utils/formatDate';
import VerticalOrderStep from '../VerticalOrderStep';

const DeliveryTracking = () => {

    const params = useLocalSearchParams();

    const data = JSON.parse(params.orderTracking)

    const orderState = data.order_tracking[data.order_tracking.length - 1].name

    const orderTracking = data.order_tracking

    return (
        <View className="bg-[#f5f5f5] px-3 ">
            <View className="bg-white px-3 py-3 my-2 rounded-md shadow">
                <View className="flex flex-row items-center gap-3 pb-4">
                    <View className="border border-grey5 rounded-md px-1 py-1">
                        <Image
                            resizeMode="contain"
                            style={{ width: 25, height: 25 }}
                            source={{
                                uri: data.order_products[0].thumb
                            }}

                        />
                    </View>
                    <View>
                        <Text className="text-base font-urbanistSemiBold">Receive by {formatAddDate(data.createdAt)}</Text>
                        <Text className="text-sm font-urbanistMedium text-grey1">Shipped with EFX Express Delivery</Text>
                    </View>
                </View>
                <OrderStep type={orderState} />
            </View>
            <View className="bg-white px-3 py-3 rounded-md shadow">
                <View className="border-b border-grey5 pb-2">
                    <Text className="text-base font-urbanistBold ">Order Status Detail</Text>
                </View>
                <View className="max-h-[350px]">
                    <VerticalOrderStep data={orderTracking} type={orderState} />
                </View>
            </View>
        </View>
    )
}

export default DeliveryTracking