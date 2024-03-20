import SearchBar from "../../../../components/SearchBar";
import { View, FlatList, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import products from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";
import PressableContainer from "../../../../components/PressableContainer";
import CenteredDivider from "../../../../components/CenteredDivider";
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../../../../constants/theme";

const searchData = [
  {
    id: 1,
    title: "Product 1",
    image: "https://picsum.photos/200/300",
    price: 100,
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://picsum.photos/200/300",
    price: 200,
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://picsum.photos/200/300",
    price: 300,
  },
  {
    id: 4,
    title: "Product 4",
    image: "https://picsum.photos/200/300",
    price: 300,
  }
]

const Search = () => {
  const handleSearcProduct = (value) => {
    console.log(value);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <View className="px-2 mb-2 py-4">
            <SearchBar onSearch={handleSearcProduct} />
          </View>


          <CenteredDivider color={COLORS.lightGray} />
          <FlatList
            data={searchData}
            renderItem={({ item }) => <SearchResultCard text={item.title} />}
            keyExtractor={(item) => item.id.toString()}

          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


const SearchResultCard = ({ text }) => {

  return (
    <PressableContainer>
      <View className='bg-white py-2 h-12 items-center px-4 flex-row justify-between'>
        <Text className='text-gray-400 text-lg'>{text}</Text>
        <AntDesign name="arrowright" size={24} color={COLORS.lightGray} />

      </View>

    </PressableContainer>
  )
}

export default Search;
