import { FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import { ICONS } from "../../constants/icons";
import { View, Text } from "react-native";

const TYPE = {
  home: {
    component: FontAwesome5,
    name: "Home",
    icon: ICONS.fa_home,
    color: "black",
  },
  cart: {
    component: Feather,
    name: "Cart",
    icon: ICONS.feather_shopping_bag,
    color: "black",
  },
  order: {
    component: Ionicons,
    name: "Order",
    icon: ICONS.ionIcons_cart,
    color: "black",
  },
  menu: {
    component: Ionicons,
    name: "Menu",
    icon: ICONS.ionIcon_menu,
    color: "black",
  },
  wishlist: {
    component: Ionicons,
    name: "Wishlist",

    icon: ICONS.ionIcon_heart_full,
    color: "black",
  },
};

function TabIcon({ activated, name, size = 20 }) {
  const Icon = TYPE[name].component;
  const color = activated ? TYPE[name].color : "gray";

  return (
    <View className="justify-center items-center">
      <Icon
        // style={styles.icon}
        className="my-1"
        name={TYPE[name].icon}
        color={color}
        size={size}
      />

      <Text className={color}>{TYPE[name].name}</Text>
    </View>
  );
}

export default TabIcon;

// style={styles.label(color)}
