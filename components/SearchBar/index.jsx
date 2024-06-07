import { useState, useEffect } from "react";
import { TextInput, View } from "react-native";
import { IMAGES } from "../../constants/image";

import { ICONS } from "../../constants/icons";
import { Ionicons } from "@expo/vector-icons";
import useNavigation from "../../hooks/useNavigation";
import Icon from "../Icon";
import { useDebouncedCallback } from "use-debounce";

const DEFAULT_STATE = {
  value: "",
  placeholder: "Search",
};

function SearchBar({
  onSearch = () => {},
  initialFocus = false,
  initialValue = "",
}) {
  const { go_to_search_result_page } = useNavigation();
  const [isFocus, setIsFocus] = useState(initialFocus);
  const [searchValue, setSearchValue] = useState(
    initialValue || DEFAULT_STATE.value
  );
  const { placeholder } = DEFAULT_STATE;

  const debounced = useDebouncedCallback((value) => {
    if (!value) return;

    onSearch(value);
    setSearchValue(value);
  }, 500);

  const handleSubmit = () => {
    go_to_search_result_page(searchValue);
  };

  return (
    <View
      className={`p-2.5 h-10 bg-white items-center flex justify-between flex-row ${
        isFocus ? "border-black border-[1px]" : ""
      }`}
    >
      <Ionicons color={"#000000"} name={ICONS.ionIcon_search} size={20} />
      <TextInput
        className="text-black flex-1 h-10 mx-2"
        onChangeText={(value) => debounced(value)}
        placeholder={placeholder}
        placeholderTextColor={"#000000"}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onSubmitEditing={handleSubmit}
      />
      <Icon source={IMAGES.adjust_control} style={{ width: 22, height: 22 }} />
    </View>
  );
}

export default SearchBar;
