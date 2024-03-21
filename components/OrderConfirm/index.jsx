import { ScrollView, Text, View, Pressable, Image } from 'react-native';
import AddressCard from "../AddressCard";
import Button from '../Button';
import CartCard from '../CartCard';
import CouponCard from '../CouponCard';
import ShippingCard from '../ShippingCard';
import { IMAGES } from '../../constants/image';

const cartData = [
    {
        id: 1,
        name: 'Lawson Chair',
        quantity: 2,
        price: "4.500.000đ",
        image: "https://www.planscape.co.uk/557ed71e9aa15d29605cd279/product_images/tables/coffee/nomique/lux/nomique-lux-table-09.jpg?w=640"
    },
    {
        id: 2,
        name: 'Parabolic Reflector',
        quantity: 1,
        price: "2.000.000đ",
        image: "https://static.wixstatic.com/media/21bf73_601754224ee4419683968042a8b3a947~mv2_d_1770_2221_s_2.png/v1/fill/w_657,h_801,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Blue-ChairShadow.png"
    },
    {
        id: 3,
        name: 'Mini Wooden Table',
        quantity: 1,
        price: "600.000đ",
        image: "https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1710746885~exp=1710750485~hmac=5daff58b0442d6c3540e68bbf6fb30f07b7e4d802e0ee1b24d02b507a56f8f07&w=826"
    },
    {
        id: 4,
        name: 'Wooden Wardrobe',
        quantity: 1,
        price: "6.399.000đ",
        image: "https://a.1stdibscdn.com/mid-century-teak-wardrobe-from-younger-1960s-for-sale/f_73322/f_361110821694452076895/f_36111082_1694452077540_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=640"
    },
]


export default function OrderConfirm() {

    return (
        <View className="h-full relative bg-white">
            <ScrollView className="px-5 py-4" style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                <View className="border-b border-grey5 pb-1">
                    <Text className="text-black text-[18px] font-urbanistBold">Shipping Address</Text>
                    <View className="py-6">
                        <AddressCard />
                    </View>
                </View>
                <View className="border-b border-grey5 pt-6 pb-1">
                    <Text className="text-black text-[18px] font-urbanistBold">Order List</Text>
                    <View className="mt-6 mx-1">
                        {cartData.map((item) => (
                            <CartCard key={item.id} cart={item} />
                        ))}
                    </View>
                </View>
                <View className="border-b border-grey5 pt-6 pb-1">
                    <Text className="text-black text-[18px] font-urbanistBold">Choose Shipping</Text>
                    <View className="py-6">
                        <ShippingCard />
                    </View>
                </View>
                <View className="pt-6">
                    <Text className="text-black text-[18px] font-urbanistBold">Coupon Code</Text>
                    <View className="py-6">
                        <CouponCard />
                    </View>
                </View>
                <View className='flex-col bg-white rounded-3xl flex gap-4 px-4 py-4 shadow-sm mx-1 mt-4 mb-10'>
                    <View className="flex flex-row justify-between">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Subtotal</Text>
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">30.000.000đ</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Shipping</Text>
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">0đ</Text>
                    </View>
                    <View className="flex flex-row justify-between border-b border-grey5 pb-6">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Discount</Text>
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">- 300.000đ</Text>
                    </View>
                    <View className="flex flex-row justify-between pb-3">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Total</Text>
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">29.700.000đ</Text>
                    </View>
                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 w-full h-[100px] shadow-md border-t border-x border-grey5 rounded-t-3xl bg-white">
                <View className="flex flex-row justify-between px-5 pt-5">
                    <Pressable className="w-full">
                        <Button type="checkout">
                            <View className="flex flex-row items-center">
                                <Text className="text-white font-urbanistSemiBold pr-4">Continue to Payment</Text>
                                <Image
                                    resizeMode="contain"
                                    style={{ width: 16, height: 16 }}
                                    source={IMAGES.right_arrow}
                                />
                            </View>
                        </Button>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
