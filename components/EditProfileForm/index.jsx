import { View, Text, ScrollView, KeyboardAvoidingView, Pressable } from "react-native";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import Avatar from "../Avatar";
import ButtonModal from "../ButtonModal";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import { get_user_profile } from "../../api/userUrl";
import useUser from "../../hooks/useUser";

const EditProfileForm = ({ data }) => {
  const { edit_profile } = useUser();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      username: data.username,
    }
  });
  const onSubmit = (data) => {
    edit_profile(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      enabled
      keyboardVerticalOffset={120}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View className="mx-auto border w-fit h-fit rounded-full my-2 bg-white flex-1">
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
        <FormInput type="phone_edit" control={control} />


        <View className='mt-44'>
        <ButtonModal type="updateUserProfile" onPress={handleSubmit(onSubmit)}>
          <View className="flex flex-row items-center">
            <Text className="text-white font-urbanistSemiBold">Apply</Text>
          </View>
        </ButtonModal>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default withFetchDataWithAuth(EditProfileForm, get_user_profile);
