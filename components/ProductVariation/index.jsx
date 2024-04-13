import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { classNames } from "../../utils/classNames";
import React from "react";

export default function ProductVariation({
  variation,
  currentVariation,
  onUpdateVariation,
  className,
}) {
  const { name, properties } = variation;
  const onSelectProperty = (property_id) => {
    onUpdateVariation(property_id);
  };
  return (
    <View className="flex flex-row gap-2 items-center">
      <Text className="text-black text-[12px] font-urbanistMedium capitalize mb-1">
        {name}
      </Text>
      <FlatList
        data={properties}
        contentContainerStyle={{ gap: 4 }}
        horizontal
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          const { value, _id } = item;
          const selected = currentVariation.property_id === _id;
          return (
            <TouchableOpacity
              onPress={() => onSelectProperty(_id)}
              className={classNames(
                "border p-1 w-10 h-10",
                selected ? "border-black" : "border-gray-200",
                className
              )}
            >
              <View
                style={{ backgroundColor: value }}
                className="w-full h-full rounded-full border border-grey5"
              ></View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
