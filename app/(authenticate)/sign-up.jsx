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
      <ContentContainer>
        <SafeAreaView className="items-center my-2">
          <View className="mt-8">
            <Logo />
          </View>
          {/* <AnimationView className="w-72 h-72" source={ANIMATIONS.delivery} /> */}
        </SafeAreaView>
        <View className="bg-white flex-1 rounded-l-[50] rounded-r-[50] px-4 py-8">
          <Text className="text-2xl font-bold mb-4 text-gray-700 text-center">
            Let's Get Started!
          </Text>
          <SignUpForm />
          <Text className="text-xs text-center mt-4 text-gray-500">
            Sign in for continue shopping
          </Text>
        </View>
      </ContentContainer>
    </View>
  );
};

export default SignUp;
