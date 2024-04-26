import React, { useState } from "react";
import { View, FlatList, Pressable, Text } from "react-native";

const STATUS = {
  defaultText: "text-black",
  defaultPresable: "bg-white",
  activeText: "text-white",
  activePresable: "bg-black",
};

const CategoriesFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <>
      <View className="my-5">
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="mx-1" key={item.id}>
              <Pressable
                className={`px-4 py-2 rounded-full border-black border-[2px] ${selectedCategory === item
                    ? STATUS.activePresable
                    : STATUS.defaultPresable
                  }`}
                  onPress={() => onSelectCategory(item)}
              >
                <Text
                  className={`${selectedCategory === item
                      ? STATUS.activeText
                      : STATUS.defaultText
                    }`}
                >
                  {item}
                </Text>
              </Pressable>
            </View>
          )}
        />
      </View></>
  );
};

export default CategoriesFilter;