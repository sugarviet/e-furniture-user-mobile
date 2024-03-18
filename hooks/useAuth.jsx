import { usePost } from "./api-hooks";
import { get_login, get_register } from "../api/authUrl";
import useAuthStore from "../stores/useAuthStore";
import useNavigation from "./useNavigation";
import {jwtDecode}  from "jwt-decode";
import "core-js/stable/atob";

export default function useAuth() {
  const { setTokens } = useAuthStore();
  const { go_to_sign_in } = useNavigation();
  const { mutate: login } = usePost(
    get_login(),
    undefined,
    (data) => {
      const { access_token, refresh_token } = data;
      const decode = jwtDecode(access_token);

      console.log(decode);
      setTokens(access_token, refresh_token, decode.account_id);

    },
    () => {}
  );
  const { mutate: register } = usePost(
    get_register,
    undefined,
    () => {
    },
    () => {}
  );
  const login_with_app = (data) => {
    console.log(data);
    login(data);
  };
  const register_with_app = () => {
    go_to_sign_in();
  };
  return {
    login_with_app,
    register_with_app,
  };
}
