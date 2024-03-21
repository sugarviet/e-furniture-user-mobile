import { View, Text } from "react-native";
import OrderConfirm from "../../../../components/OrderConfirm";
import { COLORS } from "../../../../constants";

const CheckoutScreen = () => {
    return (
        <View style={{ height: '100%', backgroundColor: COLORS.white }}>
            <OrderConfirm />
        </View>
    )
}

export default CheckoutScreen