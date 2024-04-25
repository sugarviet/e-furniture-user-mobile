import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";
import useNavigation from "../../hooks/useNavigation";
import { useState } from "react";
import CheckBox from "../Checkbox";
import useAuth from "../../hooks/useAuth";
import ButtonModal from "../ButtonModal";

function SignUpForm() {
  const { control, handleSubmit, watch } = useForm();
  const { go_to_sign_in } = useNavigation();
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const { register_with_app } = useAuth()
  const onSubmit = (data) => {
    console.log(data);
    const { username, password } = data;
    register_with_app()
  };


  return (
    <KeyboardAvoidingView
      className=''
      behavior={'padding'}
      enabled
      keyboardVerticalOffset={120}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-2 mx-1">
          <FormInput className="shadow-sm h-12 bg-white rounded-md mb-2" type="first_name" control={control} />
          <FormInput className="shadow-sm h-12 bg-white rounded-md mb-2" type="last_name" control={control} />

          <FormInput className="shadow-sm h-12 bg-white rounded-md mb-2" type="username" control={control} />
          <FormInput className="shadow-sm h-12 bg-white rounded-md mb-2" type="email" control={control} />
          <FormInput className="shadow-sm h-12 bg-white rounded-md mb-2" type="password" control={control} />

          <FormInput className="shadow-sm h-12 bg-white rounded-md mb-2"
            control={control}
            type="confirmPassword"
            placeholder={"Nhập lại mật khẩu"}
            validated={password === confirmPassword}
          />
        </View>
        <View className="flex-row items-center mt-2 mb-4 mx-1">
          <CheckBox
            checked={policyAccepted}
            handlePress={() => setPolicyAccepted(!policyAccepted)}
          />
          <Text className="flex-1">Accept the policy of eFurniture</Text>
        </View>

        <ButtonModal onPress={handleSubmit(onSubmit)} type="register">
          <View className="flex flex-row items-center">
            <Text className="text-white font-urbanistSemiBold uppercase">
              Sign up
            </Text>
          </View>
        </ButtonModal>
        <TouchableOpacity onPress={go_to_sign_in} className="mt-4 flex flex-row justify-center items-center py-3 mb-4">
          <Text className="text-base font-urbanistMedium">Already has an account ?{" "}</Text>
          <Text className="text-base font-urbanistMedium" style={{ textDecorationLine: "underline" }}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpForm;
