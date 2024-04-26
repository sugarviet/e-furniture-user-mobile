import { Tabs } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import BestSellerProduct from "../../../components/BestSellerProduct";
import BestSelletSlider from "../../../components/BestSelletSlider";
import FlashSaleBgSlider from "../../../components/FlashSaleBgSlider";
import HeaderButton from "../../../components/HeaderButton";
import SearchBar from "../../../components/SearchBar";
import TypeList from "../../../components/TypeList";
import types from "../../../data/types";
import useNavigation from "../../../hooks/useNavigation";
const productDetailCarousel = [
  { id: 1, URI: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1713444521/eFurniture/slier_bg_k0s1h2.png" },
  { id: 2, URI: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1713445862/eFurniture/slider_bg_2_q0ov8n.png" },
];
const Home = () => {
  const { go_to_search_page, go_to_flash_sale } = useNavigation();

  return (
    <ScrollView className="flex-1">
      <Tabs.Screen
        options={{
          header: () => (
            <SafeAreaView>
              <View className="flex-row z-50 items-center px-4 pt-2">
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
        <BestSellerProduct/>
      </View>

      <Pressable onPress={go_to_flash_sale} className="px-3">
        <FlashSaleBgSlider />
      </Pressable>

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
