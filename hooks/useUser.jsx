import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { useUpdate } from './api-hooks';
import { get_update_user_profile } from '../api/userUrl';

const useUser = () => {
  const param = useLocalSearchParams();
  const { mutate: edit_profile } = useUpdate(get_update_user_profile(param.slug), undefined, () => {
      console.log("thanh cong");
  }, () => { console.log("That bai") });
  return {
    edit_profile
  }
}

export default useUser
