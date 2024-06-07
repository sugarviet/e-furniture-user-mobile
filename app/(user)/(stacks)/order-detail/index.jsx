import { Stack } from "expo-router";
import { View } from 'react-native';
import HeaderButton from "../../../../components/HeaderButton";
import OrderDetail from '../../../../components/OrderDetail';
import useNavigation from '../../../../hooks/useNavigation';
const OrderDetailStatus = () => {

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