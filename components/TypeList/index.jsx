import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { withFetchData } from "../../hocs/withFetchData";
import { get_furniture_type_api } from "../../api/furnitureUrl";
import useNavigation from "../../hooks/useNavigation";

const TypeList = ({ data }) => {
  const { go_to_catalog } = useNavigation();
  const handlePress = (slug) => {
    go_to_catalog(slug);
  };

  return (
    <View className="my-2 mb-8 max-h-48 overflow-hidden">
      <View className="flex-wrap items-center justify-start flex-row">
        {data.map((type) => {
          const { _id, thumb, slug, name } = type;
          return (
            <Pressable
              key={_id}
              onPress={() => handlePress(slug)}
              className="items-center justify-between h-20 w-1/5 my-2"
            >
              <Image
                source={{ uri: thumb }}
                className="w-14 h-14 rounded-full"
              />
              <Text className="text-xs font-semibold">{name}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default withFetchData(TypeList, get_furniture_type_api);
