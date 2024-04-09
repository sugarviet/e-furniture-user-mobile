import { Entypo } from '@expo/vector-icons';
import { Image, Text, View, Pressable } from "react-native";
import { ICONS } from "../../constants/icons";
import CircleCheckbox from "../CircleCheckbox";
import PressableContainer from "../PressableContainer";
import { useState, useEffect } from "react";
import { formatDate } from '../../utils/formatDate';
import formatMoney from "../../utils/formatMoney";
import CouponError from '../CouponError';

const CouponCard = ({ getTotalPrice, data, selectedVoucher, handleGetCouponId }) => {

    const handleSelectCoupon = (couponId) => {
        handleGetCouponId(couponId)
    }

    const isHideCoupon = (data.used_turn_count === data.maximum_use_per_user) || (data.minimum_order_value > getTotalPrice())

    const maxUsedCoupon = data.used_turn_count === data.maximum_use_per_user

    const notReachValueCoupon = data.minimum_order_value > getTotalPrice()


    return (
        <PressableContainer onPress={() => {
            if (!isHideCoupon) {
                handleSelectCoupon(data._id);
            }
        }}>
            <View style={{ width: '100%' }} className={`flex flex-row w-full mx-2 shadow-sm ${isHideCoupon ? "opacity-60" : "opacity-100"}`}>
                <View className="">
                    <Image
                        resizeMode="contain"
                        style={{ width: 100, height: 100 }}
                        source={{ uri: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1709351627/eFurniture/voucher-left_n2on4v.png' }}
                    />
                </View>
                <View className='flex-row bg-white flex items-center justify-between pl-2 pr-3 w-[70%]'>
                    <View className="flex flex-col pl-1">
                        <Text className='font-bold text-sm pb-1'>{data.code}</Text>
                        <Text className='font-urbanistMedium text-[13px] '>{data.value}% off Capped at ₫100k</Text>
                        <Text className='font-urbanistMedium text-[13px] '>Min. Spend ₫{formatMoney(data.minimum_order_value)}</Text>
                        <Text className='font-urbanistMedium text-[12px] text-grey1 pt-2'>{(data.used_turn_count / data.maximum_use) * 100}% used, Valid Till: {formatDate(data.end_date)}</Text>
                    </View>

                    <Pressable>
                        <CircleCheckbox
                            checked={selectedVoucher === data._id}
                            handlePress={() => {
                                if (!isHideCoupon) {
                                    handleSelectCoupon(data._id);
                                }
                            }}
                            color="#f8dddd"
                        />
                    </Pressable>
                </View>
                <View className="bg-white z-10 absolute right-[14px] top-2">
                    <View className="rounded-l-[10px] z-20 bg-black/60 w-9 h-5 rounded-r-[1px] text-white flex justify-center items-center">
                        <Text className="text-white font-urbanistMedium text-[12px]">
                            x{data.maximum_use}
                        </Text>
                    </View>
                    <View className='absolute top-5 right-[1px] border-b-black border-b-4 border-r-4 border-r-transparent rotate-90'></View>
                </View>
            </View>
            <View className="mx-2">
                {maxUsedCoupon
                    &&
                    <CouponError type="maxUsed" />
                }
                {notReachValueCoupon
                    &&
                    <CouponError type="notReachValue" />
                }
            </View>

        </PressableContainer>
    )
}

export default CouponCard