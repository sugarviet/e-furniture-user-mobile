import SearchBar from "../../../../components/SearchBar";
import { View, FlatList, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import products from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";
import PressableContainer from "../../../../components/PressableContainer";
import CenteredDivider from "../../../../components/CenteredDivider";

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
          <View className="px-2 mb-2">
            <SearchBar onSearch={handleSearcProduct} />
          </View>


          <CenteredDivider color='#d3d3d3' />
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
      <View className='bg-white py-2 h-12 flex-col justify-center px-4'>
        <Text className='text-gray-400 text-lg'>{text}</Text>
      </View>

    </PressableContainer>
  )
}

export default Search;
