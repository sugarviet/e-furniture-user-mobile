import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon3D from "../Icon3D";
import useNavigation from "../../hooks/useNavigation";

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
    text: "Đơn hàng của bạn",
  },
  wishlist: {
    icon: "wishlist",
    text: "Wishlist",
    path: "go_to_wishlist",
  },
};

function MenuOptionCard({ type }) {
  const props = TYPE[type];

  const { icon, text, path } = props;

  const navigate = useNavigation();

  return (
    <TouchableOpacity
      className="rounded-lg px-2 py-3 bg-white h-18 justify-between shadow"
      onPress={() => {
        if (path) {
          navigate[path]();
        }
      }}
    >
      <Icon3D type={icon} />
      <Text className="mt-2 text-base font-medium">{text}</Text>
    </TouchableOpacity>
  );
}
export default MenuOptionCard;
