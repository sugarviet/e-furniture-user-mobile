import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import SearchBar from "../../../../components/SearchBar";
import { View, FlatList, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import products from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";

const Result = () => {
  const local = useLocalSearchParams();

  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 4 }}>
        <View>
          <View className="px-2 mb-2 py-4">
            <SearchBar initialValue={local.q} />
          </View>

          <View className='px-4 flex flex-row justify-between items-center'>
            <Text className='text-xl font-bold'>Results for "{local.q}"</Text>
            <Text>0 found</Text>
          </View>

          <FlatList
            data={products}
            style={{ marginTop: 10 }}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Result