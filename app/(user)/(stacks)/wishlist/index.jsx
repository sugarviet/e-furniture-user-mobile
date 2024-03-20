import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../../../../components/ProductCard";
import products from "../../../../data/products";
import { Stack } from "expo-router";
import CategoriesFilter from "../../../../components/CategoriesFilter";

const Wishlist = () => {
  return (
    <View className="bg-white flex-initial">
      <Stack.Screen
        options={{
          headerTransparent: false,
          title: "My Wishlist",
          headerTitleStyle: { color: "#0F1010" },
        }}
      />
      <CategoriesFilter />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default Wishlist;
