import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import useNavigation from '../../hooks/useNavigation';
import { formatCurrency } from '../../utils/formatCurrency';
import useFlashSaleButton from './useFlashSaleButton';
import useHidePrice from '../../utils/useHidePrice';

const OCCUR_STATE = {
    0: {
        name: "upcoming"
    },
    1: {
        name: "ongoing"
    },
    2: {
        name: "finished"
    }
}


function FlashSaleProduct({ data, status }) {

    const product = data.productId

    const colorVariation = product.variation[0];

    const FLASH_SALE_BUTTON = useFlashSaleButton(product.slug);

    const props = FLASH_SALE_BUTTON[OCCUR_STATE[status].name];

    const hiddenSalePrice = useHidePrice(data.salePrice);

    return (
        <TouchableOpacity onPress={props.function} className="bg-[#f5f5f5]">
            <View className="border-t border-grey5 flex flex-row">
                <View className="py-1 pl-2 bg-white">
                    <Image className="w-32 h-32 mr-1" resizeMode="contain" source={{ uri: product.thumbs[0] }} />
                </View>
                <View style={{ flex: 1 }} className="flex flex-col justify-between py-2 mx-4">
                    <Text className="text-[18px] font-urbanistSemiBold ">{product.name}</Text>
                    <View className='flex flex-row justify-between items-end'>
                        <View>
                            <Text className="text-[12px] font-urbanistSemiBold text-grey2 line-through">{formatCurrency(product.regular_price)}</Text>
                            {status === 1 ?
                                <Text className="text-[16px] font-urbanistBold ">{formatCurrency(data.salePrice)}</Text>
                                :
                                <Text className="text-[16px] font-urbanistBold ">{hiddenSalePrice} ₫</Text>
                            }
                            <View className="flex-row my-2">
                                {colorVariation.properties.map((property, i) => {
                                    const { value } = property;
                                    return (
                                        <View
                                            style={{
                                                backgroundColor: value,
                                                transform: `translateX(-${12 * i}rem)`,
                                            }}
                                            className="rounded-full w-6 h-6"
                                            key={i}
                                        ></View>
                                    );
                                })}
                            </View>
                        </View>
                        <View className="bg-black px-4 py-3 rounded-md">
                            <Text className="text-white text-[12px] font-urbanistSemiBold ">{props.name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FlashSaleProduct