import React from 'react'
import { Text, View } from 'react-native'


const TYPES = {
    address: {
        name: "Billing Address",
        className: "border-b border-grey5 pt-6 pb-1"
    },
    order_list: {
        name: "Order List",
        className: "border-b border-grey5 pt-6 pb-1"
    },
    shipping: {
        name: "Shipping Method",
        className: "border-b border-grey5 pt-6 pb-1"
    },
    coupon: {
        name: "Coupon Code",
        className: "border-b border-grey5 pt-6 pb-1"
    },
    payment: {
        name: " Payment Method",
        className: "pt-6"
    },
};

function OrderConfirmLayout({ children, type }) {
    const { name, className } = TYPES[type]
    return (
        <View className={`${className}`}>
            <Text className="text-black text-[18px] font-urbanistBold">
                {name}
            </Text>
            <View className="py-6">
                {children}
            </View>
        </View>
    )
}

export default OrderConfirmLayout