import {
  View,
  ScrollView,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CategoriesFilter from "../../../components/CategoriesFilter";
import TypeList from "../../../components/TypeList";
import types from "../../../data/types";
import useNavigation from "../../../hooks/useNavigation";
import SearchBar from "../../../components/SearchBar";
import BestSelletSlider from "../../../components/BestSelletSlider";
import { Tabs } from "expo-router";
import HeaderButton from "../../../components/HeaderButton";

const productDetailCarousel = [
  { id: 1, URI: "https://i.ibb.co/0QmpZ2X/image-5.png" },
  { id: 2, URI: "https://i.ibb.co/MDkgBLN/image-4.png" },
];

const Home = () => {
  const { go_to_search_page } = useNavigation();

  return (
    <ScrollView className="flex-1">
      <Tabs.Screen
        options={{
          header: () => (
            <SafeAreaView>
              <View className="flex-row z-50 items-center px-4">
                <TouchableOpacity
                  className="flex-1 mr-2"
                  onPress={go_to_search_page}
                >
                  <SearchBar />
                </TouchableOpacity>
                <HeaderButton type="notification" />
              </View>
            </SafeAreaView>
          ),
        }}
      />
      <BestSelletSlider pagination carouselData={productDetailCarousel} />
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
