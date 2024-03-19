import { useRef } from "react";
import { Text, View, Button } from "react-native"
import BottomSheet from "../../../components/BottomSheet";
import CategoriesFilter from "../../../components/CategoriesFilter";
import { IMAGES } from '../../../constants/image'
import Banner from "../../../components/Banner";
import useNavigation from "../../../hooks/useNavigation";
import useAuthStore from "../../../stores/useAuthStore";


const Home = () => {

  const { clearTokens } = useAuthStore();

  const {go_to_product_detail} = useNavigation();

  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {

    bottomSheetRef.current?.expand();
  }
  return (
    <View className="flex-1">
      <Banner source={IMAGES.banner} />
     
      <CategoriesFilter />
      <Button title="product detail"
        onPress={() => {
          go_to_product_detail();
        }} />

      <Button title="logout" onPress={clearTokens} />

      <Button title="open bottom sheet" onPress={openBottomSheet} />

      <BottomSheet ref={bottomSheetRef}>
        <Text>Hi</Text>
      </BottomSheet>
    </View>
  )
}

export default Home