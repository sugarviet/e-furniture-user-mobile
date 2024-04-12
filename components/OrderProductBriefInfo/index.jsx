import { Image, Pressable, Text, View } from "react-native";
import { formatCurrency } from "../../utils/formatCurrency";
import { useRef, useState } from "react";
import BottomSheet from "../BottomSheet";
import RatingForm from "../RatingForm";
import ProductVariation from "../ProductVariation";


const OrderProductBriefInfo = ({ orderProduct }) => {
    const [orderBriefInfoCard, setOrderBriefInfoCard] = useState();
    const ratingBottomSheet = useRef(false);
    const handleOpenRatingModal = (product) => {
        setOrderBriefInfoCard(product)
        ratingBottomSheet.current?.expand();

    };

    return (
        <View className="">
            {orderProduct.map((product, index) => {
                const onSale =
                    product.product_id.regular_price -
                    product.product_id.sale_price >
                    0;
                return (
                    <View key={`${product} + ${index}`} className="flex flex-row gap-4 pt-2 mb-4">
                        <View className="border border-grey4 px-2 py-2 rounded-xl">
                            <Image
                                resizeMode="contain"
                                style={{ width: 70, height: 70 }}
                                source={{
                                    uri: product.product_id.thumbs[0]
                                }}
                            />

                        </View>

                        <View className="flex-1">
                            <View className="flex flex-row items-center justify-between">
                                <Text
                                    numberOfLines={2}
                                    className="text-[16px] font-urbanistExtraBold max-w-[180px]"
                                >
                                    {product.product_id.name}
                                </Text>
                                <Pressable onPress={() => handleOpenRatingModal(product)}>
                                    <Text>Review</Text>
                                </Pressable>
                            </View>

                            <View className="flex flex-row items-center justify-between pt-4">
                                <View>
                                    {product.variation.map((item, i) => {
                                        const { variation_id, property_id } = item;
                                        const currentVariation =
                                            product.product_id.variation.find(
                                                (i) => i._id === variation_id
                                            );
                                        currentVariation.properties =
                                            currentVariation.properties.filter(
                                                (item) => item._id === property_id
                                            );
                                        return (
                                            <ProductVariation
                                                key={i}
                                                currentVariation={currentVariation}
                                                variation={currentVariation}
                                                className="text-[10px] w-6 h-6"
                                            />
                                        );
                                    })}
                                </View>
                                <Text className="text-[16px] font-urbanistRegular text-grey1">
                                    x{product.quantity}
                                </Text>
                            </View>

                            <View className="flex flex-row items-center justify-end gap-2 pt-3">
                                {onSale && (
                                    <Text className="text-[16px] font-urbanistSemiBold line-through text-grey2">
                                        {formatCurrency(
                                            product.product_id.regular_price
                                        )}
                                    </Text>
                                )}
                                <Text className="text-[16px] font-urbanistSemiBold">
                                    {formatCurrency(product.product_id.sale_price)}
                                </Text>

                            </View>

                        </View>
                    </View>
                )
            })}

            <BottomSheet ref={ratingBottomSheet}>
                {orderBriefInfoCard ? <RatingForm orderBriefInfoCard={orderBriefInfoCard} /> : null}

            </BottomSheet>
        </View>
    );
};

export default OrderProductBriefInfo;
