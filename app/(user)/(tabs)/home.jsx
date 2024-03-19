import { Button, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Banner from "../../../components/Banner";
import CategoriesFilter from "../../../components/CategoriesFilter";
import ProductCard from "../../../components/ProductCard";
import { IMAGES } from "../../../constants/image";
import products from "../../../data/products";
import useNavigation from "../../../hooks/useNavigation";
const Home = () => {

  const { go_to_product_detail } = useNavigation();
  return (
    <View className="flex-1">
      <Banner source={IMAGES.banner} />

      <CategoriesFilter />
      <Button
        title="product detail"
        onPress={() => {
          go_to_product_detail();
        }}
      />

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
