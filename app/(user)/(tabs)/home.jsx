import {useState} from "react";
import { View, ScrollView, Pressable, Button } from "react-native";
import Banner from "../../../components/Banner";
import CategoriesFilter from "../../../components/CategoriesFilter";
import ProductCard from "../../../components/ProductCard";
import { IMAGES } from "../../../constants/image";
import products from "../../../data/products";
import SearchBar from "../../../components/SearchBar";
import useNavigation from "../../../hooks/useNavigation";
import SuccessModal from "../../../components/SuccessModal";

const Home = () => {
  const { go_to_search_page } = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Pressable className="px-2 mb-2 py-4" onPress={go_to_search_page}>
          <SearchBar />
        </Pressable>
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
