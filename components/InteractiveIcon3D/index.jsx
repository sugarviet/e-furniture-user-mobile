import AnimatedLottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ANIMATIONS } from "../../constants/animations";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

const TYPES = {
  heart: {
    source: ANIMATIONS.heart,
    scale: 1.5,
    width: 40,
    height: 40,
  },
};

function InteractiveIcon3D({ type, onPress, active }) {
  const iconRef = useRef();

  const { width, height, scale } = TYPES[type];

  useEffect(() => {
    if (!active) return;
    iconRef.current.play();
  }, [active]);

  return (
    <View
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      onStartShouldSetResponder={(e) => true}
    >
      <TouchableOpacity onPress={onPress}>
        <AnimatedLottieView
          ref={iconRef}
          style={{
            transform: [{ scale }],
            width,
            height,
          }}
          source={TYPES[type].source}
          resizeMode="contain"
          progress={active ? 1 : 0}
          loop={false}
        />
      </TouchableOpacity>
    </View>
  );
}

export default InteractiveIcon3D;
