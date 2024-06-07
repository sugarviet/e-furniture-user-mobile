import { Text, View } from "react-native";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";

function ErrorMessage({ message }) {
  return (
    <View className="flex-row items-center my-1">
      <Icon className="w-4 h-4 mr-1" source={IMAGES.warning} />
      <Text className="text-rose-500 font-semibold text-xs">{message}</Text>
    </View>
  );
}

export default ErrorMessage;
