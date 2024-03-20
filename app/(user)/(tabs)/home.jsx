import React, { useState } from "react";
import { View, ScrollView, Button } from "react-native";
import Banner from "../../../components/Banner";
import CategoriesFilter from "../../../components/CategoriesFilter";
import ProductCard from "../../../components/ProductCard";
import { IMAGES } from "../../../constants/image";
import products from "../../../data/products";
import SuccessModal from "../../../components/SuccessModal";

const Home = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Banner source={IMAGES.banner} height={200} />
        <CategoriesFilter />
        <Button title="Open Success Modal" onPress={() => setModalVisible(!modalVisible)}>
        </Button>
        {modalVisible &&
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%',zIndex:9999 }}>
          </View>
        }
        <SuccessModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
