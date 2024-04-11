import React from "react";
import {
  FontAwesome5,
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { ICONS } from "../../constants/icons";

import { View, Image } from "react-native";

const types = {
  feed: {
    component: FontAwesome5,
    icon: ICONS.fa_home,
  },
  explore: {
    component: Ionicons,
    icon: ICONS.ionIcon_paw,
  },
  care: {
    component: Ionicons,
    icon: ICONS.ionIcon_heart,
  },
  retail: {
    component: FontAwesome5,
    icon: ICONS.fa_cart,
  },
  menu: {
    component: Ionicons,
    icon: ICONS.ionIcon_menu,
  },
  globe: {
    component: Ionicons,
    icon: ICONS.ionIcon_globe,
  },
  comment: {
    component: Ionicons,
    icon: ICONS.ionIcon_comment,
  },
  heart: {
    component: Ionicons,
    icon: ICONS.ionIcon_heart_full,
  },
  threeDotsHorizontal: {
    component: Ionicons,
    icon: ICONS.ionIcon_ellipsis_horizontal_sharp,
  },
  productCart: {
    component: Feather,
    icon: ICONS.feather_shopping_bag,
  },
  activity: {
    component: Feather,
    icon: ICONS.feather_activity,
  },
  right: {
    component: AntDesign,
    icon: ICONS.antDesign_right,
  },

  palette: {
    component: FontAwesome5,
    icon: ICONS.fontAwesome_palette,
  },
  image_gallery: {
    component: Ionicons,
    icon: ICONS.ionIcons_image,
  },
  pending: {
    component: MaterialIcons,
    icon: ICONS.materials_pending,
  },
  package: {
    component: Feather,
    icon: ICONS.feather_package,
  },
  ship: {
    component: FontAwesome6,
    icon: ICONS.fa_truck,
  },
  done: {
    component: MaterialIcons,
    icon: ICONS.ma_done,
  },
  location: {
    component: Ionicons,
    icon: ICONS.ionIcons_location,
  },
  edit: {
    component: AntDesign,
    icon: ICONS.antDesign_eidt,
  },
  wishlist: {
    component: Ionicons,
    icon: ICONS.ion_bookmark,
  },
  order: {
    component: Feather,
    icon: ICONS.feather_product_cart,
  },
  star: {
    component: AntDesign,
    icon: ICONS.antDesign_star,

  }
};

const Icon2D = ({ activated = "white", name, size = 12 }) => {
  const Icon = types[name].component;

  return (
    <View>
      <Icon
        name={types[name].icon}
        color={activated}
        size={size}
        source={types[name].src}
      />
    </View>
  );
};

export default Icon2D;
