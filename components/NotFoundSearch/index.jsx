import React from "react";
import { View, Text, Image } from "react-native";

const NotFoundSearch = () => {
  return (
    <View className="flex justify-center items-center mx-auto my-auto">
      <Image
        source={{
          uri: "https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png",
        }}
        className="w-52 h-52 mb-2"
      />
      <Text className="text-lg text-stone-950 font-bold">Not Found</Text>
      <Text className="text-sm text-gray-500 mt-2 text-center max-w-xs">
        Sorry, the keywords you entered cannot be found please check again or
        search with another keyword.
      </Text>
    </View>
  );
};

export default NotFoundSearch;
