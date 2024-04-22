import {
  View,
  ScrollView,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import CategoriesFilter from "../../../components/CategoriesFilter";
import TypeList from "../../../components/TypeList";
import types from "../../../data/types";
import useNavigation from "../../../hooks/useNavigation";
import SearchBar from "../../../components/SearchBar";
import BestSelletSlider from "../../../components/BestSelletSlider";
import { Tabs } from "expo-router";
import HeaderButton from "../../../components/HeaderButton";
import { IMAGES } from "../../../constants/image";
import FlashSaleBgSlider from "../../../components/FlashSaleBgSlider";
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { useEffect, useState } from "react";
const productDetailCarousel = [
  { id: 1, URI: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1713444521/eFurniture/slier_bg_k0s1h2.png" },
  { id: 2, URI: "https://res.cloudinary.com/dc4hafqoa/image/upload/v1713445862/eFurniture/slider_bg_2_q0ov8n.png" },
];
const Home = () => {
  const { go_to_search_page, go_to_flash_sale, go_to_order_confirmation } = useNavigation();

  // useEffect(() => {
  //   const handleOpenURL = (event) => {
  //     if (event.url) {
  //       const url = Linking.parse(event.url);
  //     }
  //     WebBrowser.dismissBrowser();
  //   };

  //   Linking.addEventListener('url', handleOpenURL);
  // }, []);

  const _handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync('https://pay.payos.vn/web/d9e757cc586c438b802c2e434675679b');
    WebBrowser.dismissBrowser();
  };

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
        <CategoriesFilter />
      </View>

      <Pressable onPress={go_to_flash_sale} className="px-3">
        <FlashSaleBgSlider />
      </Pressable>

      <Pressable className="mt-5 bg-black rounded px-2 py-4 self-center" onPress={_handlePressButtonAsync}>
        <Text className="text-white">go to url</Text>
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
