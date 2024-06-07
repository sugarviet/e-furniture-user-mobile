import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CheckBox({ checked, size, color, handlePress }) {
  let checkboxClass = `border rounded items-center justify-center border-[1px] w-5 h-5 my-${1} mr-${1}`;


  if (checked) {
    checkboxClass += ` bg-${color}`;
  }

  return (
    <TouchableOpacity
      className={checkboxClass}
      onPress={handlePress}
    >
      {checked && <Ionicons name="checkmark-sharp" style="text-white" />}
    </TouchableOpacity>
  );
}

export default CheckBox;
