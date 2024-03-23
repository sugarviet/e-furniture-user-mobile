import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import Avatar from "../Avatar";
import ButtonModal from "../ButtonModal";
const EditProfileForm = ({userId}) => {
  const { control, handleSubmit, watch } = useForm();

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      enabled
      keyboardVerticalOffset={120}
    >
      <ScrollView>
        <View className="mx-auto border w-fit h-fit rounded-full my-2">
          <Avatar
            size="superMega"
            src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
            shape="rounded"
          />
        </View>
        <FormInput type="first_name" control={control} />
        <FormInput type="last_name" control={control} />
        <FormInput type="username" control={control} />
        <FormInput type="email" control={control} />
        <FormInput type="phone_user" control={control} />
        
        <View className="flex justify-center h-24">
          <ButtonModal type="addNewAddress">
            <View className="flex flex-row items-center">
              <Text className="text-white font-urbanistSemiBold">Apply</Text>
            </View>
          </ButtonModal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileForm;
