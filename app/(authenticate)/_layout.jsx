import { Stack } from "expo-router";

function AuthenticateLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerShadowVisible: false,
      }}
    >
        
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />

    </Stack>
  );
}

export default AuthenticateLayout;
