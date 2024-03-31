import { SafeAreaView, Text, View } from "react-native";
import SignInForm from "../../components/SignInForm";
import Logo from "../../components/Logo";

const SignIn = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="items-center my-2">
        <View className="mt-8">
          <Logo />
        </View>
      </SafeAreaView>
      <View className="bg-white flex-1 rounded-l-[50] rounded-r-[50] px-4 py-8">
        <Text className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Let's Get Started!
        </Text>
        <SignInForm />
        <Text className="text-xs text-center mt-4 text-gray-500">
          Sign in for continue shopping
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
