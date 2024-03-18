import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import TabIcon from "../../../components/TabIcon";
import HeaderButton from "../../../components/HeaderButton";

const tabs = [
  { page: "home", name: "E-FURNITURE", header_options: [] },
  {
    page: "cart",
    name: "Mua sắm",
    header_options: ["shopping_cart", "shopping_options"],
  },
  { page: "order", name: "Order", header_options: [] },

  { page: "menu", name: "Menu", header_options: ["search", "chat"] },
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
                    fontWeight: 'bold'
                  }}
                >
                  {name}
                </Text>
              ),
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 72,
                    marginHorizontal: 16,
                  }}
                >
                  {header_options.map((option, index) => (
                    <Text
                      key={index}
                      style={{
                        fontSize: 28,
                        marginHorizontal: 16,
                      }}
                    >
                      <HeaderButton key={`${option} + ${index}`} type={option} />
                    </Text>
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