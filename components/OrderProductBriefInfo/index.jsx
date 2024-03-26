import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ICONS } from "../../constants/icons";
import { formatCurrency } from "../../utils/formatCurrency"


const OrderProductBriefInfo = ({ orderProduct }) => {

    const lengthOfProduct = orderProduct.order_products.length

    return (
        <View className="">
            {orderProduct.order_products.slice(0, 1).map((product) => (
                <View key={product._id} className="flex flex-row gap-4 pt-2 mb-4">
                    <View className="border border-grey4 px-2 py-2 rounded-xl">
                        <Image
                            resizeMode="contain"
                            style={{ width: 70, height: 70 }}
                            source={{
                                uri: product.thumb
                            }}
                        />
                    </View>

                    <View className="flex justify-between py-1">
                        <View className="flex flex-row items-center justify-between">
                            <Text
                                numberOfLines={2}
                                className="text-[16px] font-urbanistExtraBold max-w-[180px]"
                            >
                                {product.name}
                            </Text>
                        </View>
                        <Text className="text-[16px] font-urbanistRegular text-grey1">
                            {product.quantity}
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
                </View>
            ))}

            {lengthOfProduct > 1 &&
                <View className="border-t border-grey5">
                    <Text className="text-[12px] font-urbanistLight text-center text-grey1 py-2">See more product</Text>
                </View>}

            <View className="border-y border-grey5 flex flex-row justify-between items-center py-4">
                <Text className="text-[12px] font-urbanistLight text-grey1">{lengthOfProduct} products</Text>
                <Text className="font-urbanistSemiBold text-[16px]">Order Total: <Text className="font-urbanistSemiBold text-[14px]">{formatCurrency(orderProduct.order_checkout.final_total)}</Text></Text>
            </View>
        </View>
    );
};

export default OrderProductBriefInfo;
