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
    <View>
      <Text className="text-black text-[18px] font-urbanistBold capitalize mb-1">
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
                className="w-full h-full rounded-full"
              ></View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
