import { View, Text, TouchableOpacity } from "react-native";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import { get_user_profile } from "../../api/userUrl";
import useAuthStore from "../../stores/useAuthStore";
import useNavigation from "../../hooks/useNavigation";

const UserBriefCard = ({ data }) => {
  const { accountId } = useAuthStore();
  const { go_to_profile } = useNavigation();

  return (
    <TouchableOpacity onPress={() => go_to_profile(accountId)} className="flex-row items-center bg-white p-2 rounded shadow">
      <View className="mr-4">
      </View>
      <View className="flex-1">
        <Text className='font-urbanistBold text-lg my-1'>{data.last_name} {data.first_name}</Text>
        <Text className='font-urbanistBold text-sm text-gray-600 my-1'>{data.email}</Text>
      </View>
    </TouchableOpacity>
  );
}
const fetchUserProfile = () => {
  const { accountId } = useAuthStore();
  return get_user_profile({ slug: accountId });
};

export default withFetchDataWithAuth(UserBriefCard, fetchUserProfile);
