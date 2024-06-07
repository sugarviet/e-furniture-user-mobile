import { Image } from '@rneui/themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { formatDateFull, formatTimeWithAmPm } from '../../utils/formatDate';
import HeaderButton from '../HeaderButton';
import LoadingSpinner from "../LoadingSpinner";
const RefundProof = () => {

    const params = useLocalSearchParams();

    const { data } = params;
    const orderTracking = JSON.parse(data);

    console.log(orderTracking);

    const orderShipping = orderTracking.order_shipping

    return (
        <View className="bg-[#f5f5f5] px-3 ">
            <Stack.Screen
                options={{
                    title: "Proof of Refund",
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
                <Text className="text-white text-[15px] font-urbanistRegular">Refund At: {formatTimeWithAmPm(orderTracking.current_order_tracking.date)} {formatDateFull(orderTracking.current_order_tracking.date)}</Text>
            </View>
            <Image
                source={{ uri: orderTracking.current_order_tracking.note }}
                className="w-full h-full"
                style={{ width: '100%', height: '100%' }}
                PlaceholderContent={
                    <LoadingSpinner />
                }
            >
            </Image>
        </View>
    )
}

export default RefundProof