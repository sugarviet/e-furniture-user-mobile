import { View, Text, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import ButtonModal from "../ButtonModal";
import FormInput from "../FormInput";
import useAuthStore from "../../stores/useAuthStore";
import useNavigation from "../../hooks/useNavigation";
import useAuth from "../../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";

function SignInForm() {
  const { control, handleSubmit } = useForm();
  const { go_to_sign_up } = useNavigation();
  const { login_with_app } = useAuth();

  const onSubmit = (data) => {
    login_with_app(data);
  };

  return (
    <View>
      <View className="mb-8">
        <View className="mb-2">
          <FormInput className="shadow-sm h-16 bg-white rounded-md" type="username" control={control} />
        </View>
        <FormInput className="shadow-sm h-16 bg-white rounded-md" type="password" control={control} />
      </View>
      <ButtonModal onPress={handleSubmit(onSubmit)} type="login">
        <View className="flex flex-row items-center">
          <Text className="text-white font-urbanistSemiBold uppercase">
            Sign in
          </Text>
        </View>
      </ButtonModal>
      <TouchableOpacity onPress={go_to_sign_up} className="mt-4 flex flex-row justify-center items-center py-3">
        <Text className="text-base font-urbanistMedium"> Don't have an account yet ?{" "}</Text>
        <Text className="text-base font-urbanistMedium" style={{ textDecorationLine: "underline" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignInForm;
