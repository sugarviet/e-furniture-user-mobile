import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreenExpo from "expo-splash-screen";
import { useState, useEffect } from "react";
import SplashScreen from "./(authenticate)/splash";
import { PortalProvider } from '@gorhom/portal';
import FlashMessage from "react-native-flash-message";

import useAuth from "../stores/useAuthStore";

const RootLayout = () => {
  const { accessToken } = useAuth();
  const [isShowSplash, setIsShowSplash] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  })

  const [fontsLoaded] = useFonts({
    "Urbanist-Thin": require("../assets/fonts/Urbanist-Thin.ttf"),
    "Urbanist-Light": require("../assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("../assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-ExtraBold": require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    "Urbanist-Black": require("../assets/fonts/Urbanist-Black.ttf"),
  });

  useEffect(() => {
    setIsShowSplash(true);
  }, [fontsLoaded])

  if (!fontsLoaded) return null;

  if (!isShowSplash || !splashAnimationFinished) {
    return (
      <SplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true)
          }
        }}
      />
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PortalProvider>
          <Slot />
        </PortalProvider>
        <FlashMessage position="top" />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default RootLayout;