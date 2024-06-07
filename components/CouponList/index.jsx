import { ScrollView, Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import useNavigation from '../../hooks/useNavigation';
import CouponCard from '../CouponCard';
import ButtonModal from '../ButtonModal';
import { useCheckout } from '../../context/CheckoutContext';
import LoadingSpinner from '../LoadingSpinner';
import { useLocalSearchParams } from "expo-router";
import EmptyContent from '../EmptyContent';
import useVoucher from '../../hooks/useVoucher';
import { apply_voucher } from '../../api/voucherApi';
import { usePost } from '../../hooks/api-hooks';
import { useState } from 'react';
import LoadingStrip from '../LoadingStrip';

const CouponList = ({ purchaseItems,setDataAfterVoucher,handleCloseCouponModal }) => {

    const {getTotalPrice, vouchers, isVoucherLoading } = useVoucher();

    const [selectedVoucher, setSelectedVoucher] = useState();

    const handleGetCouponId = (couponId) => {
        if (selectedVoucher === couponId) {
            setSelectedVoucher(null);
        } else {
            setSelectedVoucher(couponId);
        }
    };
    const emptyVoucher = !vouchers?.length;

    const productForVoucher = purchaseItems.map((item) => ({
        product_id: item._id,
        price: item.select_variation.reduce(
            (total, cur) => total + cur.sub_price,
            0
        ) + item.sale_price,
        quantity: item.quantity_in_cart
    }));

    const { mutate: applyVoucher, isLoading: isPriceVoucherLoading } = usePost(
        apply_voucher(selectedVoucher),
        undefined,
        (data) => {
            setDataAfterVoucher(data)
        },
        (error) => {
        }
    );

    const handleApplyVoucher = () => {
        if (selectedVoucher) {
            applyVoucher(productForVoucher);
        }
        setDataAfterVoucher(null)
        handleCloseCouponModal();
    }

    if (isVoucherLoading) return <LoadingStrip />;
    if (isPriceVoucherLoading) return <LoadingStrip />;

    return (
        <View className="h-full relative bg-white">
            {emptyVoucher && isVoucherLoading ?
                <EmptyContent type="coupon" />
                :
                <>
                    <ScrollView className="px-2 py-4 mt-4" style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                        {vouchers?.sort((a, b) => {
                            const aIsHideCoupon = (a.used_turn_count === a.maximum_use_per_user) || (a.minimum_order_value > getTotalPrice());
                            const bIsHideCoupon = (b.used_turn_count === b.maximum_use_per_user) || (b.minimum_order_value > getTotalPrice());
                            if (aIsHideCoupon && !bIsHideCoupon) {
                                return 1;
                            } else if (!aIsHideCoupon && bIsHideCoupon) {
                                return -1;
                            } else {
                                return 0;
                            }
                        })
                            .map((coupon) => (
                                <View key={coupon._id} className="pb-6">
                                    <CouponCard
                                        getTotalPrice={getTotalPrice}
                                        data={coupon}
                                        key={coupon.id}
                                        selectedVoucher={selectedVoucher}
                                        handleGetCouponId={handleGetCouponId}
                                    />
                                </View>
                            ))
                        }
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
                    </Pressable></>
            }
        </View>
    )
}

export default CouponList;