import { Alert } from 'react-native';

const TYPES = {
    update_profile:{
        success: {
            update: 'Profile updated successfully'
        },
        failed: {
            update: 'Profile updated failed'
        }
    }
}

const useNotification = () => {
    const success_message = (type, action) => {
        Alert.alert(
            "Success",
            TYPES[type].success[action]
            ,
            [
              { text: "OK"}
            ],
            { cancelable: false }
          );
    }
    const error_message = (type, action) => {
        Alert.alert(
            "Error",
            TYPES[type].success[action]
            ,
            [
              { text: "OK"}
            ],
            { cancelable: false }
          );
    }
  return {
    success_message,
    error_message
  }
}

export default useNotification