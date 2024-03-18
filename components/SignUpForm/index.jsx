import { View, Text, KeyboardAvoidingView, Platform, ScrollView,TouchableWithoutFeedback, Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";
import useNavigation from "../../hooks/useNavigation";
import { useState } from "react";
import CheckBox from "../Checkbox";
import useAuth from "../../hooks/useAuth";

function SignUpForm() {
  const { control, handleSubmit, watch } = useForm();
  const { go_to_sign_in } = useNavigation();
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const {register_with_app} = useAuth()
  const onSubmit = (data) => {
    console.log(data);
    const { username, password } = data;
    register_with_app()
  };


  return (
    <KeyboardAvoidingView
      className='flex-1 flex-row items-center'
      behavior={'padding'}
      enabled
      keyboardVerticalOffset={120}
    >
       
      <ScrollView>
        <View>
          <FormInput type="first_name" control={control} />
          <FormInput type="last_name" control={control} />

          <FormInput type="username" control={control} />
          <FormInput type="email" control={control} />
          <FormInput type="password" control={control} />
          
          <FormInput
          control={control}
          type="confirmPassword"
          placeholder={"Nhập lại mật khẩu"}
          validated={password === confirmPassword}
        />
        </View>
        <View className="flex-row items-center">
          <CheckBox
            checked={policyAccepted}
            handlePress={() => setPolicyAccepted(!policyAccepted)}
          />
          <Text className="flex-1">Accept the policy of eFurniture</Text>
        </View>
        <LinkableButton className="mt-4" handlePress={handleSubmit(onSubmit)}>
          Sign Up
        </LinkableButton>
       
        <LinkableButton handlePress={go_to_sign_in} type="basic">
          Already has an account ?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Sign In</Text>
        </LinkableButton>
      </ScrollView>
    
    </KeyboardAvoidingView>
  );
}

export default SignUpForm;
