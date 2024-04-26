import { View } from "react-native";
import ScrollableContentContainer from "../../../components/ScrollableContentContainer";
import UserBriefCard from "../../../components/UserBriefCard";
import SupportItemCard from "../../../components/SupportItemCard";
import { COLORS } from "../../../constants/theme";
import CenteredDivider from "../../../components/CenteredDivider";
import useAuthStore from "../../../stores/useAuthStore";
const SUPPORT_LIST = [
  "edit_profile",
  "order",
  "bank",
  'address',
  "assistance",
  "setting",
  "log_out",
];

const Menu = () => {
  const { accountId } = useAuthStore();
  return (
    <ScrollableContentContainer>
      {accountId && <UserBriefCard />}
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
