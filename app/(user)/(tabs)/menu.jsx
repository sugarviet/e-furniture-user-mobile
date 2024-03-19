import { View } from "react-native";
import ScrollableContentContainer from "../../../components/ScrollableContentContainer";
import UserBriefCard from "../../../components/UserBriefCard";
import MenuOptionCard from "../../../components/MenuOption";
import SupportItemCard from "../../../components/SupportItemCard";

const SUPPORT_LIST = [
  "wish_list",
  "assistance",
  "setting",
  "log_out",
];
const OPTION_RIGHT_LIST = ["NFC", "wishlist", "order"];
const OPTION_LEFT_LIST = ["cart", "clubs"];

const Menu = () => {
  return (
    <ScrollableContentContainer>
      <UserBriefCard />
      <View className="px-2 bg-slate-50">
        <View style={{ flexDirection: "row", columnGap: 12, marginTop: 40 }}>
          <View style={{ flex: 0.5 }}>
            {/* <RewardCard type="diamond" /> */}
            {OPTION_LEFT_LIST.map((item, index) => (
              <View key={`${item} + ${index}`} style={{ marginBottom: 16 }}>
                <MenuOptionCard type={item} />
              </View>
            ))}
          </View>
          <View style={{ flex: 0.5 }}>
            {OPTION_RIGHT_LIST.map((item, index) => (
              <View key={`${item} + ${index}`} style={{ marginBottom: 16 }}>
                <MenuOptionCard type={item} />
              </View>
            ))}
          </View>
        </View>
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
