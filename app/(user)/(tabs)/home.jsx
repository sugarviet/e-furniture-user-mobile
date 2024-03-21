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

const Home = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Banner source={IMAGES.banner} height={200} />
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
