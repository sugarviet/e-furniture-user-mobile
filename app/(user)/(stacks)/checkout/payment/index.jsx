import { View, Text } from "react-native";
import { COLORS } from "../../../../../constants";
import PaymentList from "../../../../../components/PaymentList";


const Payment = () => {
    return (
        <View style={{ height: '100%', backgroundColor: COLORS.white }}>
            <PaymentList />
        </View>
    )
}

export default Payment