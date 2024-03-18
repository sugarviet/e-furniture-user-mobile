import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";
import useAuthStore from "../../stores/useAuthStore";
import useNavigation from "../../hooks/useNavigation";
import useAuth from "../../hooks/useAuth";
function SignInForm() {
  const { control, handleSubmit } = useForm();
  const { go_to_sign_up } = useNavigation();
  const {login_with_app} = useAuth();

  const { setTokens } = useAuthStore();
  const onSubmit = (data) => {
    const { username, password } = data;
    login_with_app();
  };
  const handlePress = () => {
    setTokens(true, true, true);
  };

  return (
    <View>
      <View>
        <FormInput type="username" control={control} />
        <FormInput type="password" control={control} />
      </View>
      <LinkableButton className="mt-4" handlePress={handlePress}>
        Go to home
      </LinkableButton>
      <LinkableButton className="mt-4" handlePress={handleSubmit(onSubmit)}>
        Sign in
      </LinkableButton>
      <LinkableButton handlePress={go_to_sign_up}>
        Not yet has an account ?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Sign Up</Text>
      </LinkableButton>
    </View>
  );
}

export default SignInForm;
