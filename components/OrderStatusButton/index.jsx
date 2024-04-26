import { Pressable, Text, View } from "react-native";

const TYPES = {
    Pending: {
        type: "Pending",
        name: "Pay again",
    },
    Processing: {
        type: "Processing",
        name: "Cancel Order",
    },
    Shipping: {
        type: "Shipping",
        name: "View detail",
    },
    Done: {
        type: "Done",
        name: "Buy again",
    },
    Cancelled: {
        type: "Cancelled",
        name: "View detail",
    },
    Refunded: {
        type: "Refunded",
        name: "View detail",
    },
    Failed: {
        type: "Failed",
        name: "View detail",
    },

};

const OrderStatusButton = ({ type, onPress, data, className }) => {
    
    const { name } = TYPES[type];
    return (
        <>
            {data.current_order_tracking.name === TYPES[type].type && (
                <Pressable onPress={onPress} className={`w-full flex my-2 ${className}`}>
                    <View className="flex flex-row justify-center items-center px-6 py-[14px] rounded-md bg-black shadow-2xl">
                        <Text className="text-white">{name}</Text>
                    </View>
                </Pressable>
            )}
        </>
    );
};

export default OrderStatusButton;
