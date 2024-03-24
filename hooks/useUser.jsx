import { useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';
import { useUpdate } from './api-hooks';
import { get_update_user_profile, get_user_profile } from '../api/userUrl';
import useNotification from './useNotification';

const useUser = () => {
  const param = useLocalSearchParams();
  const { success_message } = useNotification();
  const { mutate: edit_profile } = useUpdate(get_update_user_profile(param.slug), undefined, () => {
    success_message('update_profile', 'update')
  }, () => { console.log("That bai") }, get_user_profile(param.slug));
  return {
    edit_profile
  }
}

export default useUser
