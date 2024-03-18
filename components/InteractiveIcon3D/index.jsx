import AnimatedLottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ANIMATIONS } from "../../constants/animations";
import { useEffect, useRef, useState } from "react";

const TYPES = {
  heart: {
    source: ANIMATIONS.heart,
    scale: 1.5,
    width: 40,
    height: 40,
  },
  
};

function InteractiveIcon3D({ type }) {
  const [active, setActive] = useState(false);
  const iconRef = useRef();

  const { width, height, scale } = TYPES[type];

  useEffect(() => {
    if (!active) return;
    iconRef.current.play();
  }, [active]);

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!active);
      }}
    >
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
  );
}

export default InteractiveIcon3D;
