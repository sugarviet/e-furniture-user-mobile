import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { IMAGES} from '../../constants/image'
import useSupportItemCard from "./useSupportItemCard";


const TYPE = {
  wish_list: {
    icon: IMAGES.wishlist,
    text: "Wishlist",
  },
  edit_profile: {
    icon: IMAGES.user,
    text: "Edit Profile",
  },
  bank: {
    icon: IMAGES.wallet,
    text: "Bank Account",
  },
  assistance: {
    icon: IMAGES.help,
    text: "Help center",
  },
  order: {
    icon: IMAGES.checkout,
    text: "Order",
  },
  cart: {
    icon: IMAGES.bag,
    text: "Cart",
  },
  setting: {
    icon: IMAGES.setting,
    text: "Settings",
  },
  log_out:{
    icon: IMAGES.logout,
    text: "Logout",
    color: 'red'
    
  }
};
function SupportItemCard({ type }) {
  const props = TYPE[type];
  const SUPPORT_ITEM_CARD_FN = useSupportItemCard();
  const fnc = SUPPORT_ITEM_CARD_FN[type];
  const { icon, text, color = 'black' } = props;

  return (
    <TouchableOpacity onPress={fnc.function} className='flex-1 flex-row my-2 shadow-lg rounded-md px-1'>
      
      <View style={styles.icon_wrapper}>
        <Image resizeMode="cover" source={icon} className={`w-8 h-8`} />
      </View>
      <View style={styles.text_wrapper}>
        <Text style={styles.text(color)}>{text}</Text>
        <MaterialIcons name="arrow-forward-ios" size={18} color={color} />
      </View>
    </TouchableOpacity>
  );
}
export default SupportItemCard;
