import { View } from "react-native";
import ScrollableContentContainer from "../../../components/ScrollableContentContainer";
import UserBriefCard from "../../../components/UserBriefCard";
import MenuOptionCard from "../../../components/MenuOption";
import SupportItemCard from "../../../components/SupportItemCard";
import RewardCard from "../../../components/RewardCard";
import { COLORS } from "../../../constants/theme";
import CenteredDivider from "../../../components/CenteredDivider";
const SUPPORT_LIST = [
  "order",
  "bank",
  'cart',
  'edit_profile',
  "assistance",
  "setting",
  "log_out",
];
// const OPTION_RIGHT_LIST = ["NFC", "wishlist", "order"];
const OPTION_RIGHT_LIST = ["wishlist", "order", 'cart'];

const OPTION_LEFT_LIST = ["cart"];

const Menu = () => {
  return (
    <ScrollableContentContainer>
      <UserBriefCard />
      <View className="px-2">
      <CenteredDivider color={COLORS.lightGray} thickness={0.5}/>
        <View>
          {SUPPORT_LIST.map((item, index) => (
            <SupportItemCard key={`${item} + ${index}`} type={item} />
          ))}
        </View>
      </View>
    </ScrollableContentContainer>
  );
};

export default Menu;
