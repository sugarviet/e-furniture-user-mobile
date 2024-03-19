import { Stack } from "expo-router";
import useAuth from "../../stores/useAuthStore";
import { useLayoutEffect, useEffect } from "react";
import useNavigation from "../../hooks/useNavigation";

const UserLayout = () => {
  const { accessToken } = useAuth();
  const { go_to_home, go_to_welcome_screen } = useNavigation();

  useLayoutEffect(() => {
    if (!accessToken) return go_to_welcome_screen();

  }, [accessToken]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default UserLayout;
