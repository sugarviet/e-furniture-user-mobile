import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../../../components/ProductCard";
import products from "../../../data/products";

const Wishlist = () => {
  return (
    <View className="flex-1">
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
