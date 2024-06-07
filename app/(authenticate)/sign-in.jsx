import { SafeAreaView, Text, View } from "react-native";
import SignInForm from "../../components/SignInForm";
import Logo from "../../components/Logo";

const SignIn = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView style={{ flex: 0.4 }} className="flex justify-center items-center">
        <Logo />
      </SafeAreaView>
      <View style={{ flex: 0.6 }} className="bg-white flex-1 rounded-tl-[50] rounded-tr-[50] px-4 py-8">
        <Text className="text-2xl font-urbanistBold mb-4 text-gray-700 text-center">
          Login
        </Text>
        <SignInForm />
        <Text className="text-xs font text-center mt-4 text-gray-500">
          Sign in for continue shopping
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
