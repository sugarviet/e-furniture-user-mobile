import { useEffect } from 'react'
import useCart from './useCart';
import { usePost } from './api-hooks';
import { apply_voucher, get_voucher_by_specified } from '../api/voucherApi';
import useNavigation from './useNavigation';

const useVouchers = (chooseVoucher = '') => {
    const {go_back, go_to_checkout} = useNavigation();
    const { getCart } = useCart();
    const voucherInfo = getCart()?.map((item) => ({
        product_id: item._id,
        price: item.sale_price ? item.sale_price : item.regular_price,
    }));

    const productForVoucher = getCart()?.map((item) => ({
        product_id: item._id,
        price: item.sale_price ? item.sale_price : item.regular_price,
        quantity: item.quantity_in_cart
    }));

    const { mutate: getSpecificVoucher, data: vouchers, isLoading: isVoucherLoading } = usePost(get_voucher_by_specified(), undefined)

    const { mutate: applyVoucher, data:dataAfterApplyVoucher, isLoading: isPriceVoucherLoading } = usePost(
        apply_voucher(chooseVoucher),
        undefined,
        (data) => {
            // console.log('thanh cong', data);
            go_to_checkout();
        },
        (error) => {
            
        }
    );

    console.log('dataAfterApplyVoucher', dataAfterApplyVoucher)

    const handleApplyVoucher = () => {
        applyVoucher(productForVoucher);
    }

    useEffect(() => {
        getSpecificVoucher(voucherInfo)
    }, [])
    return {
        vouchers,
        isLoading: isVoucherLoading,
        handleApplyVoucher,
        dataAfterApplyVoucher,
        isPriceVoucherLoading
    }
}

export default useVouchers