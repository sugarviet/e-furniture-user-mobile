import React from 'react'
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FlashSaleList from '../FlashSaleList'
import FlashSaleSlider from '../FlashSaleSlider'
import { IMAGES } from '../../constants/image';
import { formatCurrency } from '../../utils/formatCurrency'
import useNavigation from '../../hooks/useNavigation';

const productDetailCarousel = [
    { id: 1, image: IMAGES.flashsale_slider },
    { id: 2, image: IMAGES.flashsale_slider2 },
];

function FlashSaleProduct({ data }) {

    const {go_to_product_detail} = useNavigation();

    return (
        <TouchableOpacity onPress={() => go_to_product_detail(data.slug)} className="bg-[#f5f5f5] ">
            <View className="border-t border-grey5 flex flex-row">
                <View className="py-1">
                    <Image className="w-32 h-32" source={{ uri: data.url }} />
                </View>
                <View className="flex flex-col justify-between py-2">
                    <Text className="text-[18px] font-urbanistSemiBold text-grey2">{data.name}</Text>
                    <View className='flex flex-row justify-between items-end w-[270px]'>
                        <View>
                            <Text className="text-[12px] font-urbanistSemiBold text-grey2 line-through">{formatCurrency(data.regular_price)}</Text>
                            <Text className="text-[16px] font-urbanistBold ">{formatCurrency(data.sale_price)}</Text>
                            <View className="bg-[#e7e7e7] self-start px-4 py-1 rounded-xl mt-1">
                                <Text className="text-[14px] font-urbanistSemiBold ">{data.sold} sold</Text>
                            </View>
                        </View>
                        <View className="bg-black px-4 py-3 rounded-md">
                            <Text className="text-white text-[12px] font-urbanistSemiBold ">BUY NOW</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FlashSaleProduct