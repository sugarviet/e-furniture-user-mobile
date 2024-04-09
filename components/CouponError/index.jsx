import { Image, Text, View } from "react-native";

const TYPES = {
    maxUsed:
    {
        message: 'You have used the maximum number of uses of this voucher'
    },
    notReachValue:
    {
        message: 'Your order has not reached the minimum value of this voucher'
    },
};

function CouponError({ type }) {

    const { message } = TYPES[type];

    return (
        <View className="flex flex-row gap-1 items-center mt-[1px]">
            <Image className="w-3 h-3" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1709925291/eFurniture/exclamation_ud637a.png"></Image>
            <Text className="text-[#ee4d2d] text-[12px]"> {message}</Text>
        </View>
    )
}

export default CouponError