import { View, Text, Button, TouchableOpacity, ImageBackground } from "react-native";
import useNavigation from "../../hooks/useNavigation";
import LinkableButton from "../../components/LinkableButton";
import Logo from "../../components/Logo";
import { IMAGES } from "../../constants/image";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"

const RootAuthen = () => {
  const { go_to_sign_in } = useNavigation();

  return (
    <ImageBackground source={IMAGES.home} resizeMode="cover" className="flex-1 justify-center relative z-0 contrast-150">
      <Stack.Screen options={{ headerTransparent: true }} />
      <LinearGradient
        start={{ x: 0.3, y: 0.4 }}
        end={{ x: 0.3, y: 1 }}
        colors={['#00000000', '#000000']}
        style={{ height: '100%', width: '100%' }}>
        <View className="w-full h-full z-0">
          <View className="absolute bottom-12 px-8">
            <Text className=" text-white text-[45px] font-urbanistSemiBold">Welcome to </Text>
            <Text className=" text-white text-[65px] font-urbanistBlack pt-2">eFurniture </Text>
            <Text className=" text-white text-[18px] font-urbanistRegular pt-6">The best furniture e-commerce app of the century for your daily needs! </Text>
            <View className="pt-4">
              <LinkableButton handlePress={go_to_sign_in} className="rounded-full">
                Login with account of e-Furniture
              </LinkableButton>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default RootAuthen;
