import { useState } from "react";
import { View, FlatList, Pressable, Text } from "react-native";

const list = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Sofas", value: "sofas" },
  { id: 3, name: "Chair", value: "chair" },
  { id: 4, name: "Armchair", value: "armchair" },
  { id: 5, name: "Couch", value: "couch" },
  { id: 6, name: "Lamp", value: "lamp" },
];

const STATUS = {
  defaultText: "text-black",
  defaultPresable: "bg-white",
  activeText: "text-white",
  activePresable: "bg-black",
};

const CategoriesFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const handleCategorySelect = (value) => {
    setActiveCategory(value);
  };
  return (
    <View className="my-5">
      <FlatList
        horizontal
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mx-1" key={item.id}>
            <Pressable
              className={`px-4 py-2 rounded-full border-black border-[1px] ${
                activeCategory === item.value
                  ? STATUS.activePresable
                  : STATUS.defaultPresable
              }`}
              onPress={() => handleCategorySelect(item.value)}
            >
              <Text
                className={`${
                  activeCategory === item.value
                    ? STATUS.activeText
                    : STATUS.defaultText
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesFilter;
