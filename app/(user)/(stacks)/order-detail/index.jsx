import { View, ScrollView } from 'react-native'
import OrderDetail from '../../../../components/OrderDetail'
import { Button } from 'react-native'
import { Stack } from "expo-router";
import useNavigation from '../../../../hooks/useNavigation';
import HeaderButton from "../../../../components/HeaderButton";
const OrderDetailStatus = () => {

    const { go_to_order } = useNavigation();
    return (
        <View className="h-full">
            <Stack.Screen
                options={{
                    title: "Order Detail",
                    headerLeft: () => <HeaderButton type={"order_back"} />,
                }}
            />
            <OrderDetail />
        </View>
    )
}

export default OrderDetailStatus