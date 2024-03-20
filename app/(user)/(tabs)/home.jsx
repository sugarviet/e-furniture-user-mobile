import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Banner from "../../../components/Banner";
import CategoriesFilter from "../../../components/CategoriesFilter";
import ProductCard from "../../../components/ProductCard";
import { IMAGES } from "../../../constants/image";
import products from "../../../data/products";
const Home = () => {
  return (
    <View className="flex-1">
      <Banner source={IMAGES.banner} />

      <CategoriesFilter />

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={{ backgroundColor: "white" }}
      />
    </View>
  );
};

export default Home;
