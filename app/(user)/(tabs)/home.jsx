import { useState } from "react";
import { View, ScrollView, Pressable, Button, Text } from "react-native";
import Banner from "../../../components/Banner";
import CategoriesFilter from "../../../components/CategoriesFilter";
import ProductCard from "../../../components/ProductCard";
import { IMAGES } from "../../../constants/image";
import products from "../../../data/products";
import PopupModal from "../../../components/Modal";
import ButtonModal from "../../../components/ButtonModal";
import TypeList from "../../../components/TypeList";
import types from "../../../data/types";
import useNavigation from "../../../hooks/useNavigation";
import CarouselSlider from "../../../components/CarouselSlider";
import SearchBar from "../../../components/SearchBar";
import BestSelletSlider from "../../../components/BestSelletSlider";

const productDetailCarousel = [
  { id: 1, URI: "https://i.ibb.co/0QmpZ2X/image-5.png" },
  { id: 2, URI: "https://i.ibb.co/MDkgBLN/image-4.png" },
 
];

const Home = () => {
  const { go_to_search_page } = useNavigation();


  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 4 }}>
        <Pressable className="px-2 mb-2 py-4" onPress={go_to_search_page}>
          <SearchBar />
        </Pressable>
        <View className='flex justify-center mx-auto'>
          <View className='flex-row justify-between items-center px-4'>
            <Text className='text-xl font-urbanistBold'>Special Offers</Text>
            <Text className='font-bold'>See All</Text>
          </View>
          <BestSelletSlider pagination carouselData={productDetailCarousel} />
        </View>
        <TypeList types={types} />
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
