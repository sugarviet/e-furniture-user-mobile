import { View } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";
import useAuth from "../../stores/useAuthStore";

function SignInForm() {
  const { control, handleSubmit } = useForm();
  const {setTokens} = useAuth()
  const onSubmit = (data) => {
    const { username, password } = data;
    
  };
  const handlePress = () => {
    setTokens(true, true, true)
  }

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
    </View>
  );
}

export default SignInForm;
