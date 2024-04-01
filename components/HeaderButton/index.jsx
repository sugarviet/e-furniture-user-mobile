import { Image, TouchableOpacity } from "react-native";
import useHeaderButton from "./useHeaderButton";

function HeaderButton({ type }) {
  const HEADER_BUTTON = useHeaderButton();

  const props = HEADER_BUTTON[type];

  return (
    <TouchableOpacity onPress={props.function}>
      <Image className="w-6 h-6" source={props.icon} />
    </TouchableOpacity>
  );
}

export default HeaderButton;
