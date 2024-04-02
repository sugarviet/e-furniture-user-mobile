import { useState } from "react";
import { TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { ICONS } from "../../constants/icons";

const DEFAULT_STATE = {
  value: "",
  placeholder: "Search",
};

function BankSearchInput({
  onChange,
  initialValue = "",
}) {
  const [searchValue, setSearchValue] = useState(
    initialValue || DEFAULT_STATE.value
  );
  const { placeholder } = DEFAULT_STATE;

  const handleOnChange = (value) => {
    setSearchValue(value);
    onChange(value);
  };

  return (
    <View
      className={`p-2.5 w-full h-14 bg-gray-100 rounded-xl items-center flex justify-between flex-row `}
    >
      <Ionicons color={"#d3d3d3"} name={ICONS.ionIcon_search} size={20} />
      <TextInput
        className="text-black flex-1 h-10 mx-2"
        value={searchValue}
        onChangeText={value => handleOnChange(value)}
        placeholder={placeholder}
        placeholderTextColor={"#d3d3d3"}
      />
    </View>
  );
}

export default BankSearchInput;
