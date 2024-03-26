import { View, ScrollView, Pressable, Text } from "react-native";
import CategoriesFilter from "../../../components/CategoriesFilter";
import TypeList from "../../../components/TypeList";
import types from "../../../data/types";
import useNavigation from "../../../hooks/useNavigation";
import SearchBar from "../../../components/SearchBar";
import BestSelletSlider from "../../../components/BestSelletSlider";

const productDetailCarousel = [
  { id: 1, URI: "https://i.ibb.co/0QmpZ2X/image-5.png" },
  { id: 2, URI: "https://i.ibb.co/MDkgBLN/image-4.png" },
];

const Home = () => {
  const { go_to_search_page } = useNavigation();

  return (
    <ScrollView className="bg-white">
      <Pressable className="px-2 mb-2 py-4" onPress={go_to_search_page}>
        <SearchBar />
      </Pressable>
      <View className="">
        <View className="flex-row justify-between items-center px-3">
          <Text className="text-xl font-urbanistBold">Special Offers</Text>
        </View>
        <BestSelletSlider pagination carouselData={productDetailCarousel} />
      </View>
      <View className="px-3">
        <Text className="text-xl font-urbanistBold">Specific Furniture</Text>
      </View>
      <TypeList types={types} />
      <View className="flex-row justify-between items-center px-3">
        <Text className="text-xl font-urbanistBold">Most Popular</Text>
      </View>
      <View className="mx-[10px]">
        <CategoriesFilter />
      </View>

      <View className="flex-row flex-wrap">
        {/* {products.map((product) => (
          <View className="w-1/2" key={product.id}>
            <ProductCard product={product} />
          </View>
        ))} */}
      </View>
    </ScrollView>
  );
};

export default Home;
