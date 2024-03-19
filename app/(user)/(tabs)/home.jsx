import { useRef } from "react";
import { Text, View, Button } from "react-native";
import BottomSheet from "../../../components/BottomSheet";
import CategoriesFilter from "../../../components/CategoriesFilter";
import { IMAGES } from "../../../constants/image";
import Banner from "../../../components/Banner";
import useNavigation from "../../../hooks/useNavigation";

const Home = () => {
  const { go_to_product_detail } = useNavigation();

  const { go_to_product_card } = useNavigation();

  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };
  return (
    <View className="flex-1">
      <Banner source={IMAGES.banner} />

      <CategoriesFilter />
      <Button
        title="product detail"
        onPress={() => {
          go_to_product_detail();
        }}
      />
      <Button
        title="product card"
        onPress={() => {
          go_to_product_card();
        }}
      />

      <Button title="open bottom sheet" onPress={openBottomSheet} />

      <BottomSheet ref={bottomSheetRef}>
        <Text>Hi</Text>
      </BottomSheet>
    </View>
  );
};

export default Home;
