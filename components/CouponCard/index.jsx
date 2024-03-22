import { Entypo } from '@expo/vector-icons';
import { Image, Text, View, Pressable } from "react-native";
import { ICONS } from "../../constants/icons";
import CircleCheckbox from "../CircleCheckbox";
import PressableContainer from "../PressableContainer";
import { useState, useEffect } from "react";

const CouponCard = () => {

    const [selectCoupon, setSelectCoupon] = useState(false);

    const handleSelectCoupon = () => {
        setSelectCoupon(!selectCoupon)
    }

    return (
        <PressableContainer onPress={() => handleSelectCoupon()}>
            <View style={{ width: '100%' }} className="flex flex-row w-full mx-2 shadow-sm">
                <View className="">
                    <Image
                        resizeMode="contain"
                        style={{ width: 100, height: 100 }}
                        source={{ uri: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1709351627/eFurniture/voucher-left_n2on4v.png' }}
                    />
                </View>
                <View className='flex-row bg-white flex items-center justify-between pl-2 pr-3 w-[70%]'>
                    <View className="flex flex-col pl-1">
                        <Text className='font-bold text-sm pb-1'>MUVODICH</Text>
                        <Text className='font-urbanistMedium text-[13px] '>20% off Capped at ₫100k</Text>
                        <Text className='font-urbanistMedium text-[13px] '>Min. Spend ₫2tr</Text>
                        <Text className='font-urbanistMedium text-[12px] text-grey1 pt-2'>20% used, Valid Till: 13.4.2023</Text>
                    </View>

                    <Pressable>
                        <CircleCheckbox checked={selectCoupon} handlePress={handleSelectCoupon} color="#f8dddd" />
                    </Pressable>
                </View>
            </View>

        </PressableContainer>
    )
}

export default CouponCard