import { usePost, usePostWithoutAuth } from "./api-hooks";
import { get_login, get_logout, get_register } from "../api/authUrl";
import useAuthStore from "../stores/useAuthStore";
import useNavigation from "./useNavigation";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

export default function useAuth() {
  const { setTokens, clearTokens } = useAuthStore();
  const { go_to_sign_in } = useNavigation();
  const { mutate: login } = usePostWithoutAuth(
    get_login(),
    undefined,
    (data) => {
      const { access_token, refresh_token } = data;
      const decode = jwtDecode(access_token);
      setTokens(access_token, refresh_token, decode.account_id);
    },
    () => {}
  );
  const { mutate: register } = usePostWithoutAuth(
    get_register(),
    undefined,
    () => {
      go_to_sign_in();
    },
    () => {}
  );
  const { mutate: logout } = usePost(
    get_logout(),
    undefined,
    () => {
      clearTokens();
    },
    () => {}
  );
  const login_with_app = (data) => {
    login(data);
  };
  const register_with_app = (data) => {
    const body = {
      ...data,
      status: 1,
    };
    register(body);
  };

  const handleLogout = () => {
    // logout();
    clearTokens();
  };
  return {
    login_with_app,
    register_with_app,
    handleLogout,
  };
}
