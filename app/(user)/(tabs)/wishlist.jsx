import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../../../components/ProductCard";
import CategoriesFilter from "../../../components/CategoriesFilter";
import { withFetchDataWithAuth } from "../../../hocs/withFetchDataWithAuth";
import { get_all_wishlist_api } from "../../../api/wishlistUrl";

const Wishlist = ({ data }) => {
  return (
    <View className="bg-white flex-initial">
      <View className="mx-4">
        <CategoriesFilter />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item._id}
        numColumns={2}
      />
    </View>
  );
};

export default withFetchDataWithAuth(Wishlist, get_all_wishlist_api);
