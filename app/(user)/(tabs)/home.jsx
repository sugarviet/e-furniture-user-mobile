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

const productDetailCarousel = [
  { id: 1, URI: "https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1710746885~exp=1710750485~hmac=5daff58b0442d6c3540e68bbf6fb30f07b7e4d802e0ee1b24d02b507a56f8f07&w=826" },
  { id: 2, URI: "https://img.freepik.com/free-psd/armchair-pillow_176382-860.jpg?t=st=1710746882~exp=1710750482~hmac=809a8b8bfd6ab7b349537ced2c12298fa0289788662db717a3ebbcecd18ea98d&w=826" },
  {
      id: 3,
      URI: "https://img.freepik.com/free-psd/living-room-with-white-sofa_176382-611.jpg?t=st=1710746882~exp=1710750482~hmac=0dba332b363375b81619873ebc3c0bf6c07828b02094febbdfd251ef13aab78d&w=996",
  },
];

const Home = () => {
  const { go_to_search_page } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 4 }}>
      <Pressable className="px-2 mb-2 py-4" onPress={go_to_search_page}>
          <SearchBar />
        </Pressable>
     

        <View className='flex justify-center mx-auto'>
          <View className='flex-row justify-between items-center px-4'>
            <Text className='font-bold text-xl'>Special Offers</Text>
            <Text className='font-bold'>See All</Text>
          </View>
          <CarouselSlider pagination type="flashsale" carouselData={productDetailCarousel} />
        </View>
        <TypeList types={types} />
        <CategoriesFilter />

        <Button title="Open Success Modal" onPress={() => setModalVisible(!modalVisible)}>
        </Button>
        <PopupModal type="success" modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <Pressable className="w-full pt-8">
            <ButtonModal type="viewOrder">
              <Text className="text-white font-urbanistSemiBold">View Order</Text>
            </ButtonModal>
          </Pressable>
          <Pressable onPress={() => setModalVisible(!modalVisible)} className="w-full pt-3 pb-2">
            <ButtonModal type="goToHome">
              <Text className="text-black font-urbanistSemiBold">Back To Home</Text>
            </ButtonModal>
          </Pressable>
        </PopupModal>

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
