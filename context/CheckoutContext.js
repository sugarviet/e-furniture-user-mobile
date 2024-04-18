import useNavigation from "../hooks/useNavigation";
import { createContext, useContext, useState, useEffect } from "react";
import useCart from "../hooks/useCart";
import { usePost } from "../hooks/api-hooks";
import { apply_voucher, get_voucher_by_specified } from "../api/voucherApi";
import { checkout_with_user } from "../api/checkoutApi";
import { PAYMENT_METHOD } from "../constants/paymentMethod";

const CheckoutContext = createContext();

function CheckoutProvider(props) {
  const [selectedVoucher, setSelectedVoucher] = useState();
  const [dataAfterVoucher, setDataAfterVoucher] = useState();
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHOD.cod);
  const [orderShipping, setOrderShipping] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const { go_back, go_to_order_confirmation } = useNavigation();
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

  const handlePaymentMethod = (metaData) => {
    const isDeposit = metaData.order_checkout.paid.type === "Deposit"
    const isCod = metaData.payment_method === PAYMENT_METHOD.cod;
    if (isDeposit && isCod) {
      setModalVisible(!modalVisible)
      // go_to_payment(metaData);
    }
    if (!isDeposit && isCod) {
      setModalVisible(!modalVisible)
      // go_to_order_confirmation(metaData);
    }
    if (!isDeposit && !isCod) {
      setModalVisible(!modalVisible)
      // go_to_payment(metaData);
    }
  };

  const { mutate: checkoutForUser, data: dataCheckout } = usePost(
    checkout_with_user(),
    undefined,
    (data) => {
      // handlePaymentMethod(data)
      console.log("checkoutData", data);
    },
    (error) => {
      message.error(error.response.data.error.message);
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

  const handleBackToHome = () => {
    setModalVisible(!modalVisible)
    go_to_home();
  }

  const handleGoToOrder = () => {
    setModalVisible(!modalVisible)
    go_to_order_confirmation(dataCheckout);
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
    handleConfirmPayment,
    checkoutForUser,
    orderShipping,
    setOrderShipping,
    modalVisible,
    setModalVisible,
    handleBackToHome,
    handleGoToOrder
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
  useCheckout,
};
