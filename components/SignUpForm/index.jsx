import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";
import useNavigation from "../../hooks/useNavigation";
import { useState } from "react";
import CheckBox from "../Checkbox";
import useAuth from "../../hooks/useAuth";
import ButtonModal from "../ButtonModal";
import ErrorMessage from "../ErrorMessage";

function SignUpForm() {
  const { control, handleSubmit, watch } = useForm();
  const { go_to_sign_in } = useNavigation();
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [policyAcceptedError, setPolicyAcceptedError] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirm_password");
  const { register_with_app } = useAuth()
  const onSubmit = (data) => {
    if (policyAccepted) {
      register_with_app(data)
      setPolicyAcceptedError(false);
    } else {
      setPolicyAcceptedError(true);
    }

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
            type="confirm_password"
            placeholder={"Nhập lại mật khẩu"}
            validated={password === confirmPassword}
          />
        </View>
        <View className=" mt-2 mb-4 mx-1">
          <View className="flex-row items-center">
            <CheckBox
              checked={policyAccepted}
              handlePress={() => setPolicyAccepted(!policyAccepted)}
            />
            <Text className="flex-1">Accept the policy of eFurniture</Text>
          </View>
          {policyAcceptedError && <ErrorMessage message="Please accept the policy of eFurniture" />}
        </View>

        <ButtonModal onPress={handleSubmit(onSubmit)} type="register">
          <View className="flex flex-row items-center">
            <Text className="text-white font-urbanistSemiBold uppercase">
              Sign up
            </Text>
          </View>
        </ButtonModal>
        <TouchableOpacity onPress={go_to_sign_in} className="mt-4 flex flex-row justify-center items-center py-3 mb-12">
          <Text className="text-base font-urbanistMedium">Already has an account ?{" "}</Text>
          <Text className="text-base font-urbanistMedium" style={{ textDecorationLine: "underline" }}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpForm;
