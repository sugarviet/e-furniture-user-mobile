import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import useHeaderButton from "./useHeaderButton";

function HeaderButton({ type }) {
  const HEADER_BUTTON = useHeaderButton();

  const props = HEADER_BUTTON[type];

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 4,
        paddingVertical: 3,
        backgroundColor: '#f2f2f2',
        borderRadius: 9999,
      }}
      onPress={props.function}
    >
      <Ionicons name={props.icon} color={'black'} size={20} />
    </TouchableOpacity>
  );
}

export default HeaderButton;
