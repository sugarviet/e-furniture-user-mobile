import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";
import useAuth from "../../stores/useAuthStore";
import useNavigation from "../../hooks/useNavigation";
import { useState } from "react";
import CheckBox from "../Checkbox";

function SignUpForm() {
  const { control, handleSubmit, watch } = useForm();
  const { go_to_sign_in } = useNavigation();
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const { setTokens } = useAuth();
  const onSubmit = (data) => {
    const { username, password } = data;
  };
  const handlePress = () => {
    setTokens(true, true, true);
  };

  return (
    <View>
      <View>
        <FormInput type="username" control={control} />
        <FormInput type="password" control={control} />
        <FormInput
        control={control}
        type="confirmPassword"
        placeholder={"Nhập lại mật khẩu"}
        validated={password === confirmPassword}
      />
      </View>
      <View className='flex-row items-center'>
        <CheckBox
          checked={policyAccepted}
          handlePress={() => setPolicyAccepted(!policyAccepted)}
        />
        <Text className='flex-1'>
          Accept the policy of eFurniture
        </Text>
      </View>
      <LinkableButton className="mt-4" handlePress={handlePress}>
        Go to home
      </LinkableButton>
      <LinkableButton handlePress={go_to_sign_in} type="basic">
        Already has an account ?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Sign In</Text>
      </LinkableButton>
      <LinkableButton className="mt-4" handlePress={handleSubmit(onSubmit)}>
        Sign in
      </LinkableButton>
    </View>
  );
}

export default SignUpForm;
