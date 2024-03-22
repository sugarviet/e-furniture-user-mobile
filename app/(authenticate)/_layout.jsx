import { Stack } from "expo-router";
import useNavigation from "../../hooks/useNavigation";
import { useEffect } from "react";
import useAuth from "../../stores/useAuthStore";
import { sleep } from "../../utils/sleep";


function AuthenticateLayout() {
  const { accessToken } = useAuth();
  const { go_to_home } = useNavigation();
  useEffect(() => {
    sleep(1000).then(() => {
       if(accessToken) return go_to_home();

    });
 

  }, [accessToken]);
  return (
    <Stack
      screenOptions={{
        title: "",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  );
}

export default AuthenticateLayout;
