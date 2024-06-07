import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { ICONS } from "../../constants/icons";
import useNavigation from "../../hooks/useNavigation";
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';
import useCart from "../../hooks/useCart";

function CartHeaderButton() {

  const { go_to_cart } = useNavigation();

  const {
    getCart,
  } = useCart();

  return (
    <TouchableOpacity onPress={go_to_cart}>
      <Feather name={ICONS.feather_shopping_bag} size={22} color="black" />
      <Badge
        badgeStyle={{ width: 18, height: 18, borderRadius: 20, backgroundColor: '#EE4037' }}
        containerStyle={{ position: 'absolute', top: 10, left: 14 }}
        value={getCart().length}
      />
    </TouchableOpacity>
  );
}

export default CartHeaderButton;
