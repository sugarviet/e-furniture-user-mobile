import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { formatDateFull, formatTimeWithAmPm } from '../../utils/formatDate';
import HeaderButton from '../HeaderButton';

const DeliveryProof = () => {

    const params = useLocalSearchParams();

    const { data } = params;
    const orderTracking = JSON.parse(data);

    const orderShipping =orderTracking.order_shipping

    return (
        <View className="bg-[#f5f5f5] px-3 ">
            <Stack.Screen
                options={{
                    title: "Proof of Delivery",
                    headerTitleStyle: { color: '#fff' },
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTransparent: false,
                    headerLeft: () => <HeaderButton className="text-black" type="white" />,
                }}

            />
            <View className="bg-black/50 h-16 contrast-150 absolute top-0 left-0 right-0 z-20 px-4 py-2">
                <Text className="text-white text-[15px] font-urbanistRegular pb-2">Order Code: {orderTracking.order_code}</Text>
                <Text className="text-white text-[15px] font-urbanistRegular">Delivery On: {formatDateFull(orderTracking.current_order_tracking.date)}</Text>
            </View>
            <Image
                source={{ uri: orderTracking.current_order_tracking.note }}
                className="w-full h-full"
            >
            </Image>
            <View className="bg-black/50 h-24 contrast-150 absolute bottom-0 left-0 right-0 z-20 px-4 py-2">
                <Text className="text-white text-[15px] font-urbanistRegular pb-2">
                    {orderShipping.address}, {orderShipping.ward}, {orderShipping.district}, {orderShipping.province}
                </Text>
                <Text className="text-white text-[15px] font-urbanistRegular">Delivery At: {formatTimeWithAmPm(orderTracking.current_order_tracking.date)}</Text>
            </View>
        </View>
    )
}

export default DeliveryProof