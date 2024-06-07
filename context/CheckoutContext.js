import { createContext, useContext, useEffect, useState } from "react";
import { apply_voucher, get_voucher_by_specified } from "../api/voucherApi";
import { PAYMENT_METHOD } from "../constants/paymentMethod";
import { usePost } from "../hooks/api-hooks";
import useCart from "../hooks/useCart";
import useNavigation from "../hooks/useNavigation";
const CheckoutContext = createContext();

function CheckoutProvider(props) {
 
  const [orderShipping, setOrderShipping] = useState();

  const value = {
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

