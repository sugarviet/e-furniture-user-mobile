import useNavigation from "../hooks/useNavigation";
import { createContext, useContext, useState, useEffect } from "react";
import useCart from "../hooks/useCart";
import { usePost } from "../hooks/api-hooks";
import { apply_voucher, get_voucher_by_specified } from "../api/voucherApi";
const CheckoutContext = createContext();

function CheckoutProvider(props) {
    const [selectedVoucher, setSelectedVoucher] = useState();
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
        apply_voucher(selectedVoucher),
        undefined,
        (data) => {
            go_back();
        },
        (error) => {
            
        }
    );


    const handleApplyVoucher = () => {
        applyVoucher(productForVoucher);
    }

    useEffect(() => {
        getSpecificVoucher(voucherInfo)
    }, [])

  const value = {
        vouchers,
        isLoading: isVoucherLoading,
        handleApplyVoucher,
        dataAfterApplyVoucher,
        isPriceVoucherLoading,
        selectedVoucher,
        setSelectedVoucher
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
