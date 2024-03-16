import { View, Text, Button, TouchableOpacity } from "react-native";
import useNavigation from "../../hooks/useNavigation";
import LinkableButton from "../../components/LinkableButton";
import Logo from "../../components/Logo";

const RootAuthen = () => {
  const { go_to_sign_in } = useNavigation();

  return (
    <View className="flex flex-col flex-1 bg-blackPrimary text-white justify-center px-2 py-4">
      <View>
        <Logo rounded />
      </View>

      <View className="flex-row mt-4 gap-2">
        <Text className="text-white">Hey,</Text>
        <Text className="text-white">Xin chào</Text>
      </View>
      {/* <AnimationView type={"welcome"} /> */}
      <LinkableButton handlePress={go_to_sign_in}>
        Đăng nhập bằng tài khoản của e-Furniture
      </LinkableButton>
      <View className="flex items-center gap-2 mt-4">
        <Text className="text-white">Bấm đăng nhập có nghĩa là bạn đồng ý</Text>
        <TouchableOpacity>
          <Text className="text-white">
            Các điều khoản sử dụng của e-Furniture
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RootAuthen;
