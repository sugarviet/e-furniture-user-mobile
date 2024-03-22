import { useRef } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { COLORS } from '../../constants';
import ButtonModal from '../ButtonModal';
import CartCard from '../CartCard';
import GorhomeBottomSheet from '../BottomSheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import useNavigation from '../../hooks/useNavigation';

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
const removeCart =
{
    id: 1,
    name: 'Lawson Chair',
    quantity: 2,
    price: "4.500.000đ",
    image: "https://www.planscape.co.uk/557ed71e9aa15d29605cd279/product_images/tables/coffee/nomique/lux/nomique-lux-table-09.jpg?w=640"
}



function CartList() {

    const cartRef = useRef(null);

    const { go_to_checkout } = useNavigation();
    const handleOpenDeleteModal = () => {
        cartRef.current?.expand();
    }

    return (
        <View style={{ height: '100%', backgroundColor: COLORS.grey1 }}>
            <ScrollView style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                <View className="mt-6 mx-5">
                    {cartData.map((item) => (
                        <CartCard key={item.id} cart={item} handleOpenDeleteModal={handleOpenDeleteModal} />
                    ))}
                </View>
            </ScrollView>
            <View className="absolute bottom-0 left-0 right-0 w-full h-[100px] shadow-md border-t border-x border-grey5 rounded-t-3xl bg-white">
                <View className="flex flex-row justify-between px-5 pt-5">
                    <View className="flex flex-col">
                        <Text className="text-[12px] font-urbanistRegular text-grey1">Total price</Text>
                        <Text className="text-[26px] font-urbanistBold">2.800.000đ</Text>
                    </View>
                    <Pressable onPress={go_to_checkout} className="w-[60%]">
                        <ButtonModal type="cart">
                            <Text className="text-white font-urbanistSemiBold">Checkout</Text>
                        </ButtonModal>
                    </Pressable>
                </View>
            </View>
            <GorhomeBottomSheet ref={cartRef}>
                <View className="px-6 pb-2 bg-[#fafafa]">
                    <View className="border-b border-grey5 pb-5">
                        <Text className="text-[24px] font-urbanistBold text-center ">Remove From Cart?</Text>
                    </View>
                    <View className="mt-4">
                        <CartCard cart={removeCart} />
                    </View>
                </View>
                <View className="flex flex-row w-full px-12 justify-center">
                    <Pressable className="w-[60%] mr-1">
                        <TouchableOpacity className="w-full rounded-[40px] h-full pl-2">
                            <View clasme="flex flex-row justify-center items-center py-5 rounded-[40px] bg-[#e7e7e7]">
                                <Text csNalassName="text-black font-urbanistSemiBold pl-3">Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </Pressable>
                    <Pressable className="w-[60%] ml-1">
                        <ButtonModal type="remove">
                            <Text className="text-white font-urbanistSemiBold">Yes, Remove</Text>
                        </ButtonModal>
                    </Pressable>
                </View>
            </GorhomeBottomSheet>
        </View>
    );
}

export default CartList;
