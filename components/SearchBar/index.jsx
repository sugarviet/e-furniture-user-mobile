import { useState } from "react";
import { TextInput, View } from "react-native";

import { ICONS } from '../../constants/icons'
import { Ionicons } from "@expo/vector-icons";

const DEFAULT_STATE = {
  value: "",
  placeholder: "Search",
};



function SearchBar({ onSearch, initialFocus = false }) {
  const [isFocus, setIsFocus] = useState(initialFocus);
  const [searchValue, setSearchValue] = useState(DEFAULT_STATE.value);
  const { placeholder } = DEFAULT_STATE;


  const handleOnChange = (value) => {
    onSearch(value);
    setSearchValue(value);
  };


  return (
    <View className={`p-2.5 w-full h-14 bg-gray-100 rounded-xl items-center flex justify-between flex-row ${isFocus ? 'border-black border-[1px]' : ''}`}>
      <Ionicons
        name={ICONS.ionIcon_search}
        size={20}
      />
      <TextInput
        className='text-black flex-1 h-10 mx-2'
        value={searchValue}
        onChangeText={(value) => handleOnChange(value)}
        placeholder={placeholder}
        placeholderTextColor={'#454545'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}

      />
    </View>
  );
}

export default SearchBar;
