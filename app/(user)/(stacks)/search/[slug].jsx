import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import SearchBar from "../../../../components/SearchBar";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import products from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";
import { withFetchData } from "../../../../hocs/withFetchData";
import { get_search_furniture_api } from "../../../../api/furnitureUrl";
import { getItemPlural } from "../../../../utils/getItemPlural";
import EmptyContent from "../../../../components/EmptyContent";

const Result = ({ data }) => {
  const local = useLocalSearchParams();
  const empty = !data.data.length;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="bg-grey6" style={{ flex: 1 }}>
        <View className="px-2 mb-2 py-4">
          <SearchBar initialValue={local.q} />
        </View>

        <View className="px-4 flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Results for "{local.q}"</Text>
          <Text>
            {data.data.length} {getItemPlural("found", data.data.length)}
          </Text>
        </View>

        {empty ? (
          <EmptyContent type="search" />
        ) : (
          <View className="mx-1 pb-28">
            <FlatList
              numColumns={2}
              data={data.data}
              style={{ marginTop: 10 }}
              renderItem={({ item }) => (
                <View className="w-1/2 px-1 pb-2">
                  <ProductCard product={item} />
                </View>
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default withFetchData(Result, get_search_furniture_api);
