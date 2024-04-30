import { apply_voucher, get_voucher_by_specified } from "../api/voucherApi";
import { usePost } from "../hooks/api-hooks";
import { useEffect, useState } from "react";
import useCart from "./useCart";

export default function useVoucher() {
 
  
  const { getCart, getTotalPrice } = useCart();

  const [dataAfterVoucher, setDataAfterVoucher] = useState();

  const voucherInfo = getCart().map((item) => ({
    product_id: item._id,
    price: item.sale_price ? item.sale_price : item.regular_price,
  }));
  

  const { mutate: getSpecificVoucher, data: vouchers, isLoading: isVoucherLoading } = usePost(get_voucher_by_specified(), undefined)


  useEffect(() => {
    getSpecificVoucher(voucherInfo);
  }, []);

  return {
    getCart,
    getTotalPrice,
    dataAfterVoucher,
    setDataAfterVoucher,
    vouchers,
    isVoucherLoading,
  };
}
