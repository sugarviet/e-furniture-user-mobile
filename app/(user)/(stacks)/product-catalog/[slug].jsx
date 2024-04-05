import { FlatList, View } from "react-native";
import { withFetchData } from "../../../../hocs/withFetchData";
import { get_furniture_by_type_api } from "../../../../api/furnitureUrl";
import { Stack } from "expo-router";
import ProductCard from "../../../../components/ProductCard";

function ProductCatalog({ data, params }) {
  const { slug } = params;
  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: slug }} />
      <FlatList
        data={data.data}
        className="p-1"
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View className="w-1/2 p-1">
              <ProductCard product={item} />
            </View>
          );
        }}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

export default withFetchData(ProductCatalog, get_furniture_by_type_api);
