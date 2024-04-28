import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { ANIMATIONS } from "../../constants/animations";
import { Button, Overlay, Icon } from '@rneui/themed';
import { FontAwesome5 } from "@expo/vector-icons";

const FlashWarningModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <Overlay isVisible={true} overlayStyle={{ width: 240, height: 95, backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: 10,paddingVertical:25}} backdropStyle={{ backgroundColor: 'transparent' }}>
      <View className="flex justify-center items-center gap-2 pb-2">
        <FontAwesome5 name="exclamation-circle" size={36} color="white" />
        <Text className="text-white text-[12px] font-urbanistSemiBold">You can not delete default address.</Text>
      </View>
    </Overlay>
  );
};

export default FlashWarningModal;
