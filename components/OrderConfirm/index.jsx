import { ScrollView, Text, View, Pressable, Image } from 'react-native';
import ButtonModal from '../ButtonModal';
import CartCard from '../CartCard';
import ShippingCard from '../ShippingCard';
import { IMAGES } from '../../constants/image';
import PressableContainer from '../PressableContainer';
import Icon2D from '../Icon2D';
import useNavigation from '../../hooks/useNavigation';
import { FontAwesome6 } from '@expo/vector-icons';
import { ICONS } from '../../constants/icons';
import { Entypo } from '@expo/vector-icons';
import Icon from '../Icon';
import AddressCard from '../AddressCard';
import useCart from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatCurrency';
import useVouchers from '../../hooks/useVouchers';
import { useCheckout } from '../../context/CheckoutContext';
import { withFetchDataWithAuth } from '../../hocs/withFetchDataWithAuth';
import { get_address_default_by_user } from '../../api/addressApi';


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

const defaultAddress = {
    id: 1,
    name: 'Lê Thế Khôi',
    account_id: {
        first_name: "Le",
        last_name: "Khoi"
    },
    phone: '0978120511',
    address: '213 Quang Trung, phường 10, Quận Gò Vấp',
}




export default function OrderConfirm() {
    const { go_to_address_book, go_to_voucher_list, go_to_payment_list } = useNavigation();
    const { getCart, getTotalPrice } = useCart();
    // const {dataAfterApplyVoucher, isPriceVoucherLoading}  = useVouchers();

    const { dataAfterApplyVoucher, isPriceVoucherLoading } = useCheckout();

    console.log(dataAfterApplyVoucher);

    if (isPriceVoucherLoading) return null;

    return (
        <View className="h-full relative bg-white">
            <ScrollView className="px-5 py-4" style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                <View className="border-b border-grey5 pb-1">
                    <Text className="text-black text-[18px] font-urbanistBold">Shipping Address</Text>
                    <View className="py-6">
                        {/* <PressableContainer onPress={go_to_address_book}>
                            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center px-3 py-4 shadow-sm mx-1'>
                                <View className="w-16 h-16 rounded-full bg-[#e3e3e3] flex justify-center items-center mr-3">
                                    <View className='w-12 h-12 rounded-full bg-black flex justify-center items-center'>
                                        <Icon2D name='location' size={20} activated="white" />
                                    </View>
                                </View>
                                <View className='flex-1'>
                                    <Text className='font-bold text-base max-w-[150px]'>{defaultAddress.name}</Text>
                                    <Text className='font-bold text-sm'>{defaultAddress.phone}</Text>
                                    <Text numberOfLines={2} className="font-urbanistMedium text-grey2 pt-1">{defaultAddress.address}</Text>
                                </View>
                                <View className='w-12 h-12 flex justify-center items-center'>
                                    <Icon source={IMAGES.edit} style={{ width: 22, height: 22 }} />
                                </View>
                            </View>
                        </PressableContainer> */}

                        <AddressCard data={defaultAddress} onPress={go_to_address_book} />

                    </View>
                </View>
                <View className="border-b border-grey5 pt-6 pb-1">
                    <Text className="text-black text-[18px] font-urbanistBold">Order List</Text>
                    <View className="mt-6 mx-1">
                        {getCart().map((item) => (
                            <CartCard key={item.id} cart={item} />
                        ))}
                    </View>
                </View>
                <View className="border-b border-grey5 pt-6 pb-1">
                    <Text className="text-black text-[18px] font-urbanistBold">Shipping Method</Text>
                    <View className="py-6">
                        <ShippingCard />
                    </View>
                </View>
                <View className="pt-6">
                    <Text className="text-black text-[18px] font-urbanistBold">Coupon Code</Text>
                    <View className="py-6">
                        <PressableContainer onPress={go_to_voucher_list}>
                            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center justify-between px-5 py-6 shadow-sm mx-1'>
                                <View className="flex flex-row items-center">
                                    <Icon source={IMAGES.coupon} style={{ width: 28, height: 28 }} />
                                    <Text className='font-bold text-base pl-3'>Choose Coupon</Text>
                                </View>
                                <View className=''>
                                    <Entypo name={ICONS.enTypo_arrow_right} size={21} color="black" />
                                </View>
                            </View>
                        </PressableContainer>
                        <View className="pt-4 flex flex-row gap-2 flex-wrap">
                            <View className="bg-black rounded-3xl w-[180px] flex flex-row items-center px-4 py-2">
                                <Text className="text-white font-urbanistBold text-[16px] pr-4">Discount {dataAfterApplyVoucher ? dataAfterApplyVoucher.voucher.value : 0}% Off</Text>
                                <Pressable>
                                    <FontAwesome6 name="xmark" size={14} color="white" />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='flex-col bg-white rounded-3xl flex gap-4 px-4 py-4 shadow-sm mx-1 mt-4 mb-10'>
                    <View className="flex flex-row justify-between">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Subtotal</Text>
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">                            {formatCurrency(getTotalPrice())}
                        </Text>
                    </View>
                    <View className="flex flex-row justify-between">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Shipping</Text>
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">0đ</Text>
                    </View>
                    <View className="flex flex-row justify-between border-b border-grey5 pb-6">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Discount</Text>
                        {/* <Text className="text-[18px] text-grey font-urbanistSemiBold">- 300.000đ</Text> */}
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">{dataAfterApplyVoucher ? formatCurrency
                            (dataAfterApplyVoucher.old_order_total - dataAfterApplyVoucher.order_total_after_voucher) : formatCurrency(0)}</Text>
                    </View>
                    <View className="flex flex-row justify-between pb-3">
                        <Text className="text-[16px] text-grey2 font-urbanistMedium">Total</Text>
                        <Text className="text-[18px] text-grey font-urbanistSemiBold">
                            {dataAfterApplyVoucher ? formatCurrency(dataAfterApplyVoucher.order_total_after_voucher) : formatCurrency(getTotalPrice())}
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <Pressable onPress={go_to_payment_list} className="absolute bottom-0 left-0 right-0 h-[100px] shadow-md border-t border-x border-grey5 rounded-t-3xl bg-white px-5 pt-5">
                <ButtonModal type="checkout">
                    <View className="flex flex-row items-center">
                        <Text className="text-white font-urbanistSemiBold pr-4">Continue to Payment</Text>
                        <Icon source={IMAGES.right_arrow} style={{ width: 16, height: 16 }} />
                    </View>
                </ButtonModal>
            </Pressable>
        </View>
    )
}
