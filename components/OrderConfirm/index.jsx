import { useLocalSearchParams } from "expo-router";
import * as WebBrowser from 'expo-web-browser';
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, Text, View } from "react-native";
import { checkout_with_user } from "../../api/checkoutApi";
import { IMAGES } from "../../constants/image";
import { PAYMENT_METHOD } from "../../constants/paymentMethod";
import { useCheckout } from "../../context/CheckoutContext";
import { usePost } from "../../hooks/api-hooks";
import useCart from "../../hooks/useCart";
import useNavigation from "../../hooks/useNavigation";
import { formatCurrency } from "../../utils/formatCurrency";
import ButtonModal from "../ButtonModal";
import CheckoutProductCard from "../CheckoutProductCard";
import DefaultAddressCard from "../DefaultAddressCard";
import DefaultCouponCard from "../DefaultCouponCard";
import DefaultPaymentCard from "../DefaultPaymentCard";
import FormInput from "../FormInput";
import Icon from "../Icon";
import LoadingSpinner from "../LoadingSpinner";
import PopupModal from "../Modal";
import OrderConfirmLayout from "../OrderConfirmLayout";
import ShippingCard from "../ShippingCard";
import PaymentList from "../PaymentList";
import GorhomeBottomSheet from "../BottomSheet";
import * as Linking from 'expo-linking';
import CouponList from "../CouponList";
import useVoucher from "../../hooks/useVoucher";
import getCoordinates from "../../utils/getCoordinate";

export default function OrderConfirm() {

  const { control, handleSubmit } = useForm();
  const { go_to_cart, go_to_order_confirmation_cod, go_to_home, go_back } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHOD.cod);

  const url = Linking.useURL();

  const handleConfirmPayment = (payment) => {
    setSelectedPayment(payment);
    paymentRef.current?.close();
  }

  const paymentRef = useRef(null);
  const couponRef = useRef(null);

  const handleOpenPaymentModal = () => {
    paymentRef.current?.expand();
  };
  const handleOpenCouponModal = () => {
    couponRef.current?.expand();
  };
  const handleCloseCouponModal = () => {
    couponRef.current?.close();
  };

  const { orderShipping } = useCheckout();
  const {
    getTotalPrice,
    dataAfterVoucher,
    setDataAfterVoucher,
    isVoucherLoading
  } = useVoucher();

  const params = useLocalSearchParams();
  const { data } = params;
  const purchaseItems = JSON.parse(data);

  const orderProducts = purchaseItems.map((cart) => ({
    code: cart.code,
    product_id: cart._id,
    price: cart.sale_price,
    quantity: cart.quantity_in_cart,
    variation: cart.select_variation,
  }));

  const handleBackToHome = () => {
    setModalVisible(!modalVisible)
    go_to_home();
  }

  const handleGoToOrder = () => {
    setModalVisible(!modalVisible)
    go_to_order_confirmation_cod(dataCheckout);
  }

  const handlePaymentMethod = async (metaData) => {
    const isDeposit = metaData.order_checkout.paid.type === "Deposit"
    const isCod = metaData.payment_method === PAYMENT_METHOD.cod;
    if (isDeposit && isCod) {
      go_to_cart();
      await WebBrowser.openBrowserAsync(metaData.order_checkout.pay_os.checkoutUrl);
      WebBrowser.dismissBrowser();
    }
    if (!isDeposit && isCod) {
      setModalVisible(!modalVisible)
    }
    if (!isDeposit && !isCod) {
      go_to_cart();
      await WebBrowser.openBrowserAsync(metaData.order_checkout.pay_os.checkoutUrl);
      WebBrowser.dismissBrowser();
    }
  };

  const { mutate: checkoutForUser, data: dataCheckout, isLoading: isCheckoutLoading } = usePost(
    checkout_with_user(),
    undefined,
    (data) => {
      handlePaymentMethod(data)
    },
    (error) => {
      message.error(error.response.data.error.message);
    }
  );

  const onSubmit = async (data) => {
    const { address, province, district, ward } = orderShipping;
    const coordinates = await getCoordinates(
      `${address} ${district} ${ward} ${province}`
    );
    checkoutForUser({
      order_products: orderProducts,
      payment_method: selectedPayment,
      order_shipping: {
        ...orderShipping,
        longitude: coordinates[0],
        latitude: coordinates[1],
        mobile: {
          returnUrl: url + "/--/order-confirmation",
          cancelUrl: url + "/--/order-cancelled",
        }
      },
      order_checkout: {
        final_total: dataAfterVoucher
          ? dataAfterVoucher.order_total_after_voucher
          : getTotalPrice(),
        voucher: dataAfterVoucher ? dataAfterVoucher.voucher : null,
        total: getTotalPrice(),
      },
      note: data.note,
    })

  };


  return (
    <View className="relative bg-[#f8f8f8]">
      <ScrollView className="mb-28 px-3">

        <OrderConfirmLayout type="address">
          <DefaultAddressCard />
        </OrderConfirmLayout>

        <OrderConfirmLayout type="order_list">
          {purchaseItems.map((item) => (
            <CheckoutProductCard key={item._id} cart={item} />
          ))}
        </OrderConfirmLayout>

        <OrderConfirmLayout type="shipping">
          <ShippingCard />
        </OrderConfirmLayout>

        <OrderConfirmLayout type="coupon">
          <DefaultCouponCard purchaseItems={purchaseItems} dataAfterVoucher={dataAfterVoucher} onPress={handleOpenCouponModal} />
          <GorhomeBottomSheet ref={couponRef}>
            <CouponList handleCloseCouponModal={handleCloseCouponModal} setDataAfterVoucher={setDataAfterVoucher} purchaseItems={purchaseItems} getTotalPrice={getTotalPrice} />
          </GorhomeBottomSheet>
        </OrderConfirmLayout>

        <OrderConfirmLayout type="payment">
          <DefaultPaymentCard onPress={handleOpenPaymentModal} selectedPayment={selectedPayment} />
          <GorhomeBottomSheet ref={paymentRef}>
            <PaymentList selectedPayment={selectedPayment} handleConfirmPayment={handleConfirmPayment} />
          </GorhomeBottomSheet>
        </OrderConfirmLayout>

        <OrderConfirmLayout type="note">
          <View className="px-1">
            <FormInput type="note" control={control} />
          </View>
        </OrderConfirmLayout>

        <View className="flex-col bg-white rounded-xl flex gap-4 px-4 py-4 shadow-sm mx-1 mt-4 mb-10">
          <View className="flex flex-row justify-between">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Subtotal
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              {" "}
              {formatCurrency(getTotalPrice())}
            </Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Shipping
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              0đ
            </Text>
          </View>
          <View className="flex flex-row justify-between border-b border-grey5 pb-6">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Discount
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              {dataAfterVoucher
                ? formatCurrency(
                  dataAfterVoucher.old_order_total -
                  dataAfterVoucher.order_total_after_voucher
                )
                : formatCurrency(0)}
            </Text>
          </View>
          <View className="flex flex-row justify-between pb-3">
            <Text className="text-[16px] text-grey2 font-urbanistMedium">
              Total
            </Text>
            <Text className="text-[18px] text-grey font-urbanistSemiBold">
              {dataAfterVoucher
                ? formatCurrency(
                  dataAfterVoucher.order_total_after_voucher
                )
                : formatCurrency(getTotalPrice())}
            </Text>
          </View>
        </View>
      </ScrollView>

      <Pressable
        onPress={handleSubmit(onSubmit)}
        className="absolute bottom-0 left-0 right-0 h-28 shadow-md border-t border-x border-grey5 rounded-t-3xl bg-white px-5 flex justify-center"
      >
        <ButtonModal type="checkout">
          <View className="flex flex-row items-center">
            <Text className="text-white font-urbanistSemiBold pr-4">
              Place Order
            </Text>
            <Icon
              source={IMAGES.right_arrow}
              style={{ width: 16, height: 16 }}
            />
          </View>
        </ButtonModal>
      </Pressable>
      <PopupModal type="success" modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <Pressable onPress={handleGoToOrder} className="w-full pt-8">
          <ButtonModal type="viewOrder">
            <Text className="text-white font-urbanistSemiBold">View Order Detail</Text>
          </ButtonModal>
        </Pressable>
        <Pressable onPress={handleBackToHome} className="w-full pt-3 pb-2">
          <ButtonModal type="goToHome">
            <Text className="text-black font-urbanistSemiBold">Back To Home</Text>
          </ButtonModal>
        </Pressable>
      </PopupModal>
    </View>
  );
}
