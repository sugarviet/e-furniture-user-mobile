import { TouchableOpacity, Text } from "react-native";
import { classNames } from "../../utils/classNames";

function LinkableButton({ children, handlePress,className }) {
  return (
    <TouchableOpacity
      className={classNames(className, "mt-4 bg-white justify-center items-center py-3 ")}
      onPress={handlePress}
    >
      <Text className="text-black uppercase font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}

export default LinkableButton;
