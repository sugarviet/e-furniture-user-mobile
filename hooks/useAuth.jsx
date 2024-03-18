import React from "react";
import { usePost } from "./api-hooks";
import { get_login, get_register } from "../api/authUrl";
import useAuthStore from "../stores/useAuthStore";
import useNavigation from "./useNavigation";

export default function useAuth() {
  const { setTokens } = useAuthStore();
  const { go_to_sign_in } = useNavigation();
  const { mutate: login } = usePost(
    get_login,
    undefined,
    () => {},
    () => {}
  );
  const { mutate: register } = usePost(
    get_register,
    undefined,
    () => {},
    () => {}
  );
  const login_with_app = () => {
    setTokens(true, true, true);
  };
  const register_with_app = () => {
    go_to_sign_in();
  };
  return {
    login_with_app,
    register_with_app,
  };
}
