import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

import { useState, useEffect,useCallback } from "react";
import SplashScreen from "./(authenticate)/splash";

const RootLayout = () => {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, [])

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
  
  if (!fontsLoaded) return null;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (isShowSplash) return <SplashScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot  onLayout={onLayoutRootView} />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default RootLayout;