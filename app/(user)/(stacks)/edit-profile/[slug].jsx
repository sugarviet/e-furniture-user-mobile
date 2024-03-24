import { View } from "react-native";
import EditProfileForm from "../../../../components/EditProfileForm";
import { Stack } from "expo-router";

const EditProfile = () => {
  
  return (
   <View className='flex-1 px-4 bg-white'>
    <Stack.Screen options={{ title: 'Edit Profile' }}/>
    <EditProfileForm />
   </View>
  );
};

export default EditProfile;
