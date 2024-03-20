import React from "react";
import { View, ScrollView } from "react-native";
import Banner from "../../../components/Banner";
import CategoriesFilter from "../../../components/CategoriesFilter";
import ProductCard from "../../../components/ProductCard";
import { IMAGES } from "../../../constants/image";
import products from "../../../data/products";

const Home = () => {
  return (
    <ScrollView >
      <View style={{ flex: 1, backgroundColor: "white" }}>
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
