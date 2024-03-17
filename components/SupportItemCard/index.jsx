import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import Icon3D from "../Icon3D";
import { IMAGES } from "../../../constants";
import useSupportItemCard from "./useSupportItemCard";

const TYPE = {
  wish_list: {
    icon: IMAGES.heart_3D,
    text: "Wishlist của bạn",
  },
  saved_post: {
    icon: IMAGES.favorite_3D,
    text: "Bài viết đã lưu",
  },
  following: {
    icon: IMAGES.community_3D,
    text: "Đang theo dõi",
  },
  assistance: {
    icon: IMAGES.QA_3D,
    text: "Trợ giúp",
  },
  setting: {
    icon: IMAGES.setting_3D,
    text: "Cài đặt",
  },
  log_out:{
    icon: IMAGES.logout,
    text: "Đăng xuất",
    
  }
};
function SupportItemCard({ type }) {
  const props = TYPE[type];
  const SUPPORT_ITEM_CARD_FN = useSupportItemCard();
  const fnc = SUPPORT_ITEM_CARD_FN[type];
  const { icon, text } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={fnc.function}>
      <View style={styles.icon_wrapper}>
        <Image resizeMode="cover" style={styles.icon} source={icon} />
      </View>
      <View style={styles.text_wrapper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default SupportItemCard;
