import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../../../../components/ProductCard";
import products from "../../../../data/products";

const Wishlist = () => {
  return (
    <View className="bg-white">
      <Stack.Screen options={{ headerTransparent: false }} />
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
