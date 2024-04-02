import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import TabIcon from "../../../components/TabIcon";
import HeaderButton from "../../../components/HeaderButton";

const tabs = [
  {
    page: "home",
    name: "E-FURNITURE",
    header_options: ["notification"],
  },
  { page: "wishlist", name: "Wishlist", header_options: [] },
  {
    page: "cart",
    name: "Shopping Cart",
    header_options: [],
  },
  { page: "order", name: "Order", header_options: [] },

  { page: "menu", name: "Menu", header_options: [] },
];

function TabsLayout() {
  return (
    <Tabs>
      {tabs.map((tab) => {
        const { page, name, header_options } = tab;
        return (
          <Tabs.Screen
            key={name}
            name={page}
            options={{
              title: "",
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon activated={focused} name={page} />
              ),
              headerLeft: () => (
                <Text
                  style={{
                    fontSize: 24,
                    marginHorizontal: 10,
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </Text>
              ),
              headerRight: () => (
                <View className="flex-row items-center mr-4 w-fit max-w-[90px] justify-around">
                  {header_options.map((option, index) => (
                    <HeaderButton key={`${option} + ${index}`} type={option} />
                  ))}
                </View>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}

export default TabsLayout;
