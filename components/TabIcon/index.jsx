import { FontAwesome5, Ionicons, Feather  } from "@expo/vector-icons";
import {ICONS} from "../../constants/icons";
import { View, Text } from "react-native";

const TYPE = {
  home: {
    component: FontAwesome5,
    name: "Home",
    icon: ICONS.fa_home,
    color: 'black',
  },
  cart: {
    component: Feather,
    name: "Cart",
    icon: ICONS.feather_shopping_bag,
    color: 'black',
  },
  order: {
    component: Ionicons,
    name: "Order",
    icon: ICONS.ionIcons_cart,
    color: 'black',
  },
  feed: {
    component: FontAwesome5,
    name: "Bảng tin",
    icon: ICONS.fa_home,
    color: 'black',

  },
  explore: {
    component: Ionicons,
    name: "Khám phá",
    icon: ICONS.ionIcon_paw,
    color: 'black',

  },
  care: {
    component: Ionicons,
    name: "Dịch vụ",
    icon: ICONS.ionIcon_heart,
    color: 'black',

  },
  retail: {
    component: FontAwesome5,
    name: "Mua sắm",
    icon: ICONS.fa_cart,
    color: 'black',

  },
  menu: {
    component: Ionicons,
    name: "Menu",
    icon: ICONS.ionIcon_menu,
    color: 'black',

  },
  globe: {
    component: Ionicons,
    icon: ICONS.ionIcon_globe,
    color: 'black',

  },
  comment: {
    component: Ionicons,
    icon: ICONS.ionIcon_comment,
    color: 'black',

  },
  heart: {
    component: Ionicons,
    icon: ICONS.ionIcon_heart_full,
    color: 'black',

  },
  threeDotsHorizontal: {
    component: Ionicons,
    icon: ICONS.ionIcon_ellipsis_horizontal_sharp,
    color: 'black',

  },
};

function TabIcon({ activated, name, size = 20 }) {
  const Icon = TYPE[name].component;
  const color = activated ? TYPE[name].color : 'gray';


  return (
    <View className='justify-center items-center'>
      <Icon
        // style={styles.icon}
        className='my-1'
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