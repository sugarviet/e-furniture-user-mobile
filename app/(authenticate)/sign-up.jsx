import {
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SignUpForm from "../../components/SignUpForm";
import AnimationView from "../../components/AnimationView";
import { ANIMATIONS } from "../../constants/animations";
import Logo from "../../components/Logo";
import ContentContainer from "../../components/ContentContainer";

const SignUp = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView style={{ flex: 0.2 }} className="flex justify-center items-center">
        <Logo />
      </SafeAreaView>
      <View className="bg-white flex-1 rounded-tl-[50] rounded-tr-[50] px-4 py-6">
        <Text className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Let's Get Started!
        </Text>
        <SignUpForm />
      </View>
    </View>
  );
};

export default SignUp;
