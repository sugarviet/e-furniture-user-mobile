import { Pressable, Text, View } from "react-native";

const TYPES = {
    Pending: {
        type: "Pending",
        name: "Cancel",
    },
    Processing: {
        type: "Processing",
        name: "Refund",
    },
    Shipping: {
        type: "Shipping",
        name: "View detail",
    },
    Done: {
        type: "Done",
        name: "Buy again",
    },
    Cancel: {
        type: "Cancel",
        name: "View detail",
    },
    Failed: {
        type: "Failed",
        name: "View detail",
    },
    Refunded: {
        type: "Refunded",
        name: "Refunded",
    },

};

const OrderStatusButton = ({ type, onPress, data }) => {
    const { name } = TYPES[type];
    return (
        <>
            {data.order_tracking[data.order_tracking.length - 1].name === TYPES[type].type && (
                <Pressable onPress={onPress} className='w-full flex items-end my-2'>
                    <View className="flex flex-row justify-center items-center px-6 py-[14px] rounded-md bg-black shadow-2xl">
                        <Text className="text-white">{name}</Text>
                    </View>
                </Pressable>
            )}
        </>
    );
};

export default OrderStatusButton;
