import { Pressable, Text, View } from "react-native";
import useCart from "../../hooks/useCart";
import useNavigation from "../../hooks/useNavigation";
import useOrderAction from "../../hooks/useOrderAction";
import LoadingStrip from "../LoadingStrip"

const TYPES = {
  Pending: {
    name: "Pay again",
    action: "payAgain",
  },
  Processing: {
    name: "Cancel Order",
    action: "cancelOrder",
  },
  Shipping: {
    name: "View detail",
    action: "viewDetail",
  },
  Done: {
    name: "Buy again",
    action: "repurchase",
  },
  Cancelled: {
    name: "View detail",
    action: "viewDetail",
  },
  Refunded: {
    name: "View detail",
    action: "viewDetail",
  },
  Failed: {
    name: "View detail",
    action: "viewDetail",
  },

};

const OrderStatusButton = ({ type, onPress, data, className }) => {

  const { name, action } = TYPES[type];

  const { go_to_order_detail, go_to_cancel_order } = useNavigation();

  const { payAgain } = useOrderAction(data);

  const handleAction = (actionName) => {
    if (actionName === "payAgain") {
      payAgain(data.id);
    }
    if (actionName === "cancelOrder") {
      go_to_cancel_order(data)
    }
    if (actionName === "viewDetail") {
      go_to_order_detail(data._id);
    }
    if (actionName === "repurchase") {
      console.log("repurchase order");
      // const list = order_products.map((product) => {
      //   const { product_id } = product;
      //   const { variation } = product_id;
      //   return {
      //     ...product_id,
      //     select_variation: variation.map((item) => {
      //       const { _id, properties } = item;
      //       return {
      //         variation_id: _id,
      //         property_id: properties[0]._id,
      //       };
      //     }),
      //   };
      // });
      // addAllToCart(list);
    }
  };


  return (
    <>
      <Pressable onPress={() => handleAction(action)} className={`w-full flex my-2 ${className}`}>
        <View className="flex flex-row justify-center items-center px-6 py-[14px] rounded-md bg-black shadow-2xl">
          <Text className="text-white">{name}</Text>
        </View>
      </Pressable>
    </>
  );
};

export default OrderStatusButton;
