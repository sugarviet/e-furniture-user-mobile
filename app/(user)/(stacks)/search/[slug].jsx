import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import SearchBar from "../../../../components/SearchBar";
import { View, FlatList, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import products from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";
import { withFetchData } from '../../../../hocs/withFetchData';
import { get_search_furniture_api } from '../../../../api/furnitureUrl';
import { getItemPlural } from '../../../../utils/getItemPlural';

const Result = ({data}) => {
  const local = useLocalSearchParams();
  console.log('data', data);
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 4 }}>
        <View>
          <View className="px-2 mb-2 py-4">
            <SearchBar initialValue={local.q} />
          </View>

          <View className='px-4 flex flex-row justify-between items-center'>
            <Text className='text-xl font-bold'>Results for "{local.q}"</Text>
            <Text>{data.data.length} {getItemPlural('found', data.data.length)}</Text>
          </View>

          <FlatList
            data={data.data}
            style={{ marginTop: 10 }}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item) => item._id.toString()}
            numColumns={2}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default withFetchData(Result, get_search_furniture_api);