import { useEffect } from "react";
import useAuth from "../stores/useAuthStore";
import useNavigation from "../hooks/useNavigation";

function withAuthentication(Screen) {
  return () => {
    const { accessToken } = useAuth();
    const { go_to_home, go_to_welcome_screen } = useNavigation();

    useEffect(() => {
      if (!accessToken) return go_to_welcome_screen();
      return go_to_home();
    }, [accessToken]);

    return <Screen />;
  };
}

export default withAuthentication;