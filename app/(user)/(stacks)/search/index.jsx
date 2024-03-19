import SearchBar from "../../../../components/SearchBar";
import ScrollableContentContainer from "../../../../components/ScrollableContentContainer";
import { View, Text, Image } from "react-native";
import { Stack } from "expo-router";
const Search = () => {
  const handleSearcProduct = (value) => {
    console.log(value);
  };
  return (
    <ScrollableContentContainer>
        <View className='px-2'>
      <SearchBar onSearch={handleSearcProduct} />

        </View>
    </ScrollableContentContainer>
  );
};

export default Search;
