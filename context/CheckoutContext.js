import { createContext, useContext, useEffect, useState } from "react";
import { apply_voucher, get_voucher_by_specified } from "../api/voucherApi";
import { PAYMENT_METHOD } from "../constants/paymentMethod";
import { usePost } from "../hooks/api-hooks";
import useCart from "../hooks/useCart";
import useNavigation from "../hooks/useNavigation";
const CheckoutContext = createContext();

function CheckoutProvider(props) {
  const [selectedVoucher, setSelectedVoucher] = useState();
  const [dataAfterVoucher, setDataAfterVoucher] = useState();
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHOD.cod);
  const [orderShipping, setOrderShipping] = useState();

  const { go_back, go_to_order_confirmation, go_to_home } = useNavigation();
  const { getCart, getTotalPrice } = useCart();

  const voucherInfo = getCart()?.map((item) => ({
    product_id: item._id,
    price: item.sale_price ? item.sale_price : item.regular_price,
  }));

  const productForVoucher = getCart()?.map((item) => ({
    product_id: item._id,
    price: item.select_variation.reduce(
      (total, cur) => total + cur.sub_price,
      0
    ) + item.sale_price,
    quantity: item.quantity_in_cart
  }));

  const { mutate: getSpecificVoucher, data: vouchers, isLoading: isVoucherLoading } = usePost(get_voucher_by_specified(), undefined)

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
    go_back();
  }

  const handleConfirmPayment = (payment) => {
    setSelectedPayment(payment);
    go_back();
  }



  useEffect(() => {
    getSpecificVoucher(voucherInfo)
  }, [])

  const value = {
    vouchers,
    getTotalPrice,
    isVoucherLoading,
    handleApplyVoucher,
    dataAfterVoucher,
    isPriceVoucherLoading,
    selectedVoucher,
    setSelectedVoucher,
    selectedPayment,
    setSelectedPayment,
    handleConfirmPayment,
    orderShipping,
    setOrderShipping,
  };
  return (
    <CheckoutContext.Provider value={value}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

const useCheckout = () => {

  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a ThemeProvider");
  }

  return context;
};


export {
  CheckoutContext,
  CheckoutProvider,
  useCheckout
};

