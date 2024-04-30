import { Slot, Stack } from "expo-router";
import { CheckoutProvider } from "../../../../context/CheckoutContext";
const CheckoutLayout = () => {
  return (
    <CheckoutProvider>
      <Stack.Screen options={{ title: "Checkout" }} />
      <Slot />
    </CheckoutProvider>
  );
};

export default CheckoutLayout;
