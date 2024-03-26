import { ScrollView, Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import useNavigation from '../../hooks/useNavigation';
import CouponCard from '../CouponCard';
import ButtonModal from '../ButtonModal';
import { withFetchDataWithAuth } from '../../hocs/withFetchDataWithAuth';
import { get_voucher_by_specified } from '../../api/voucherApi';
import useCart from '../../hooks/useCart';
import { usePost } from '../../hooks/api-hooks';
import { useEffect, useState } from 'react';
import useVouchers from '../../hooks/useVouchers';
import { useCheckout } from '../../context/CheckoutContext';

const couponList = [
    {
        id: 1,
        name: 'Vũ Trường Giang',
        phone: '0981890260',
        address: '58/19, Tân Lập 1, phường Hiệp Phú, Quận 9',
        default: true
    },
    {
        id: 2,
        name: 'Đặng Hoàng Việt',
        phone: '0124131251',
        address: '217 D2, phường Tân Hưng, Quận 7',
        default: false
    },
    {
        id: 3,
        name: 'Lê Thế Khôi',
        phone: '0978120511',
        address: '213 Quang Trung, phường 10, Quận Gò Vấp',
        default: false
    },
    {
        id: 4,
        name: 'Đặng Hoàng Việt',
        phone: '0124131251',
        address: '217 D2, phường Tân Hưng, Quận 7',
        default: false
    },
    {
        id: 5,
        name: 'Lê Thế Khôi',
        phone: '0978120511',
        address: '213 Quang Trung, phường 10, Quận Gò Vấp',
        default: false
    },
]



const CouponList = () => {
    // const [selectedCoupon, setSelectedCoupon] = useState();
    // const { vouchers, isLoading, handleApplyVoucher } = useVouchers(selectedCoupon)
    const { vouchers, isLoading, handleApplyVoucher, setSelectedVoucher } = useCheckout()

    if (isLoading) return null;

    const handleGetCouponId = (couponId) => {
        setSelectedVoucher(couponId)
    }

    return (
        <View className="h-full relative bg-white">
            <ScrollView className="px-2 py-4 mt-4" style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                {vouchers?.map((coupon) => (
                    <View key={coupon.id} className="pb-6">
                        <CouponCard data={coupon} key={coupon.id} handleGetCouponId={handleGetCouponId} />
                    </View>
                ))}
            </ScrollView>
            <Pressable
                onPress={handleApplyVoucher}
                className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-t-grey5 px-5 bg-white"
            >
                <View className="flex justify-center h-full">
                    <ButtonModal type="addNewAddress">
                        <View className="flex flex-row items-center">
                            <Text className="text-white font-urbanistSemiBold">Apply</Text>
                        </View>
                    </ButtonModal>
                </View>
            </Pressable>

        </View>
    )
}

export default CouponList;