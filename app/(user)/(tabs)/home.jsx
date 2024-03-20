import React from "react";
import { View, ScrollView, Pressable } from "react-native";
import Banner from "../../../components/Banner";
import CategoriesFilter from "../../../components/CategoriesFilter";
import ProductCard from "../../../components/ProductCard";
import { IMAGES } from "../../../constants/image";
import products from "../../../data/products";
import SearchBar from "../../../components/SearchBar";
import useNavigation from "../../../hooks/useNavigation";

const Home = () => {
  const { go_to_search_page } = useNavigation();
  return (
    <ScrollView >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Pressable className="px-2 mb-2 py-4" onPress={go_to_search_page}>
          <SearchBar />
        </Pressable>
        <Banner source={IMAGES.banner} height={200} />
        <CategoriesFilter />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {products.map((product) => (
            <View key={product.id} style={{ width: "49%" }}>
              <ProductCard product={product} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
