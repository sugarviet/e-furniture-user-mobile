import { View, Text } from "react-native";
import React from "react";
import ProductVariation from "../ProductVariation";
import { classNames } from "../../utils/classNames";

export default function ProductVariationList({
  data,
  className,
  onUpdate,
  selectVariation,
  itemClassName,
}) {
  return (
    <View className={classNames(className)}>
      {data.map((item, i) => {
        const { _id } = item;
        const currentVariation = [...selectVariation].find(
          (i) => i.variation_id === _id
        );

        const updateVariation = (property_id) => {
          const updated_select_variation = [...selectVariation].map((obj) =>
            Object.assign({}, obj)
          );

          updated_select_variation.find(
            (i) => i.variation_id === _id
          ).property_id = property_id;

          onUpdate(updated_select_variation);
        };
        return (
          <View key={i}>
            <ProductVariation
              className={itemClassName}
              currentVariation={currentVariation}
              onUpdateVariation={updateVariation}
              variation={item}
            />
          </View>
        );
      })}
    </View>
  );
}
