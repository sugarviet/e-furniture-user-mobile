import SearchBar from "../../../../components/SearchBar";
import { View, FlatList, SafeAreaView } from "react-native";
import products from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";

const Search = () => {
  const handleSearcProduct = (value) => {
    console.log(value);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View className="px-2 mb-2">
          <SearchBar onSearch={handleSearcProduct} />
        </View>

        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
