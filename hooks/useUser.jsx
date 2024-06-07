import { useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';
import { useUpdate } from './api-hooks';
import { get_update_user_profile, get_user_profile } from '../api/userUrl';
import useNotification from './useNotification';
import { useQueryClient } from "@tanstack/react-query";

const useUser = () => {
  const param = useLocalSearchParams();
  const { success_message } = useNotification();

  const queryClient = useQueryClient();

  const { mutate: edit_profile } = useUpdate(
    get_update_user_profile(param.slug),
    undefined,
    (data) => {
      queryClient.invalidateQueries(get_user_profile(param.slug));
      success_message('profile', 'update')
    },
    () => {
      console.log("That bai")
    },
  );
  return {
    edit_profile
  }
}

export default useUser
