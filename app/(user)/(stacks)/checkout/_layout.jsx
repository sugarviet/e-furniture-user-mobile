import { Slot } from "expo-router";
import { CheckoutProvider } from "../../../../context/CheckoutContext";
const CheckoutLayout = () => {

    return (
        <CheckoutProvider>
            <Slot />
        </CheckoutProvider>

    );
};

export default CheckoutLayout;
