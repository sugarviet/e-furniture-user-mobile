import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon3D from "../Icon3D";
import useNavigation from "../../hooks/useNavigation";
import Icon2D from "../Icon2D";

const TYPE = {
  NFC: {
    icon: "NFC",
    text: "eFurniture Smart NFC",
  },
  ballons: {
    icon: "NFC",
    text: "FogDace Smart NFC",
  },
  shopping_options: {
    icon: "shopping",
    text: "Tùy Chọn Mua Hàng",
    path: "go_to_shopping_options",
  },
  pet_services: {
    icon: "pet_service",
    text: "Dịch Vụ Thú Cưng",
  },
  videos: {},
  clubs: {
    icon: "social",
    text: "Clubs",
  },
  pet_report_lost: {
    icon: "emergency",
    text: "Báo mất thú cưng",
  },
  cart: {
    icon: "cart",
    text: "Cart",
  },
  order: {
    icon: "order",
    text: "Your Order",
  },
  wishlist: {
    icon: "wishlist",
    text: "Wishlist",
    path: "go_to_wishlist",
  },
  cart: {
    icon: "productCart",
    text: "Cart",
    path: "go_to_wishlist",
  },
};

function MenuOptionCard({ type }) {
  const props = TYPE[type];

  const { icon, text, path } = props;

  const navigate = useNavigation();

  return (
    <TouchableOpacity
      className="rounded-lg px-2 py-3 bg-blackPrimary h-18 justify-between shadow-lg"
      onPress={() => {
        if (path) {
          navigate[path]();
        }
      }}
    >
      {/* <Icon3D type={icon} /> */}
      <Icon2D name={icon} activated="white" size={20}/>
      <Text className="mt-2 text-base font-medium text-white">{text}</Text>
    </TouchableOpacity>
  );
}
export default MenuOptionCard;
