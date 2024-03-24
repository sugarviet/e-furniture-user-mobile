import SearchBar from "../../../../components/SearchBar";
import { View, FlatList, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import products from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";
import PressableContainer from "../../../../components/PressableContainer";
import CenteredDivider from "../../../../components/CenteredDivider";
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../../../../constants/theme";
import { useState } from "react";
import { requestWithoutAuth } from "../../../../utils/request";
import { fetcher } from "../../../../hooks/api-hooks";
import { get_search_live_furniture_api } from "../../../../api/furnitureUrl";
import useNavigation from "../../../../hooks/useNavigation";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const handleSearcProduct = async (value) => {
    const data = await fetcher(get_search_live_furniture_api(value)
    )
    setSearchData(data)
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <View className="px-2 py-4">
            <SearchBar onSearch={handleSearcProduct} />
          </View>

          <View className='flex-row justify-between items-center px-4 py-2'>
            <Text className='font-bold text-lg'>Recent</Text>
            <Text className='font-bold'>Clear All</Text>
          </View>
          <CenteredDivider color={COLORS.lightGray} thickness={0.5} />
          <FlatList
            data={searchData?.data}
            renderItem={({ item }) => <SearchResultCard text={item.name} />}
            keyExtractor={(item) => item._id.toString()}

          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


const SearchResultCard = ({ text }) => {
  const {go_to_product_detail} = useNavigation();

  return (
    <PressableContainer onPress={go_to_product_detail}>
      <View className='bg-white py-2 h-12 items-center px-4 flex-row justify-between'>
        <Text className='text-gray-400 text-lg w-80' numberOfLines={1} ellipsizeMode='tail'>{text}</Text>
        <AntDesign name="arrowright" size={24} color={COLORS.lightGray} />

      </View>

    </PressableContainer>
  )
}

export default Search;
