import React from 'react'
import PressableContainer from '../PressableContainer'
import { Text, View } from 'react-native'
import Icon from '../Icon'
import { Image } from 'react-native'
import { ICONS } from "../../constants/icons";
import { Entypo } from "@expo/vector-icons";
import useNavigation from "../../hooks/useNavigation";
import { IMAGES } from '../../constants/image'

function DefaultCouponCard({ purchaseItems, dataAfterVoucher }) {
    const { go_to_voucher_list } = useNavigation();

    return (
        <PressableContainer onPress={() => go_to_voucher_list(purchaseItems)}>
            <View className="flex-row bg-white rounded-xl flex items-center justify-between px-5 py-6 shadow-sm mx-1">
                <View className="flex flex-row items-center">
                    <Icon
                        source={IMAGES.coupon}
                        style={{ width: 28, height: 28 }}
                    />
                    {!dataAfterVoucher ?
                        <Text className="font-bold text-base pl-3">
                            Choose Coupon
                        </Text>
                        :
                        <Text className="font-bold text-base pl-3">
                            Coupon
                        </Text>
                    }
                </View>

                <View className="flex flex-row gap-1">
                    {dataAfterVoucher &&
                        <View className="flex flex-row">
                            <View className="flex flex-row pr-1">
                                <Image
                                    className="w-[4px] h-6"
                                    source={IMAGES.coupon_orange}
                                />
                                <View className="h-[23.5px] px-1 border-y-[1.2px] border-[#ed562d] flex justify-center">
                                    <Text className="text-[12px] text-[#ed562d] font-urbanistMedium">{dataAfterVoucher.voucher.value}% off</Text>
                                </View>
                                <Image
                                    className="w-[4px] h-6 scale-x-[-1]"
                                    source={IMAGES.coupon_orange}
                                />
                            </View>
                            <View className="flex flex-row">
                                <Image
                                    className="w-[4px] h-6"
                                    source={IMAGES.coupon_green_bg}
                                />
                                <View className="h-[23.5px] px-1 border-y-[1.2px] border-[#00bca1] flex justify-center">
                                    <Text className="text-[12px] text-[#00bca1] font-urbanistMedium">{dataAfterVoucher.voucher.name}</Text>
                                </View>
                                <Image
                                    className="w-[4px] h-6 scale-x-[-1]"
                                    source={IMAGES.coupon_green_bg}
                                />
                            </View>
                        </View>
                    }
                    <Entypo
                        name={ICONS.enTypo_arrow_right}
                        size={21}
                        color="black"
                    />
                </View>
            </View>
        </PressableContainer>
    )
}

export default DefaultCouponCard