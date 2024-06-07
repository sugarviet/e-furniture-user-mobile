import { View, Text } from "react-native";
import { COLORS } from "../../../../../constants";
import CouponList from "../../../../../components/CouponList";

const Voucher = () => {
    return (
        <View style={{ height: '100%', backgroundColor: COLORS.white }}>
           <CouponList/>
        </View>
    )
}

export default Voucher