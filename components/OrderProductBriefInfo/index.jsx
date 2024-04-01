import { Image, Pressable, Text, View } from "react-native";
import { formatCurrency } from "../../utils/formatCurrency";
import { useRef, useState } from "react";
import BottomSheet from "../BottomSheet";
import RatingForm from "../RatingForm";


const OrderProductBriefInfo = ({ orderProduct }) => {
    const [orderBriefInfoCard, setOrderBriefInfoCard] = useState();
    const ratingBottomSheet = useRef(false);
    const handleOpenRatingModal = (product) => {
        setOrderBriefInfoCard(product)
        ratingBottomSheet.current?.expand();

    };

    return (
        <View className="">
            {orderProduct.map((product) => (
                <View key={product.product_id} className="flex flex-row gap-4 pt-2 mb-4">
                    <View className="border border-grey4 px-2 py-2 rounded-xl">
                        <Image
                            resizeMode="contain"
                            style={{ width: 70, height: 70 }}
                            source={{
                                uri: product.thumb
                            }}
                        />

                    </View>

                    <View className="flex justify-between py-1 flex-row flex-1">
                        <View>
                            <View className="flex flex-row items-center justify-between">
                                <Text
                                    numberOfLines={2}
                                    className="text-[16px] font-urbanistExtraBold max-w-[180px]"
                                >
                                    {product.name}
                                </Text>
                            </View>
                            <Text className="text-[16px] font-urbanistRegular text-grey1">
                                x{product.quantity}
                            </Text>
                            <View className="flex flex-row items-center gap-2 w-[215px] pt-3">
                                <Text className="text-[16px] font-urbanistSemiBold line-through text-grey2">
                                    20.000.000đ
                                </Text>
                                <Text className="text-[16px] font-urbanistSemiBold">
                                    {formatCurrency(product.price)}
                                </Text>

                            </View>
                        </View>



                        <Pressable onPress={()=> handleOpenRatingModal(product)}>
                            <Text>Review</Text>
                        </Pressable>

                    </View>
                </View>
            ))}

            <BottomSheet ref={ratingBottomSheet}>
                {orderBriefInfoCard ? <RatingForm orderBriefInfoCard={orderBriefInfoCard} /> : null}
               
            </BottomSheet>
        </View>
    );
};

export default OrderProductBriefInfo;
