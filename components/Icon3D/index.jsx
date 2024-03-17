import { View, Text } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { ANIMATIONS } from "../../../constants";
import LottieView from "lottie-react-native";
const TYPES = {
  balloons: {
    source: ANIMATIONS.ballons,
    scale: 1.2,
    width: 24,
    height: 32,
  },
  chemical: {
    source: ANIMATIONS.chemical,
    scale: 1.5,
    width: 24,
    height: 32,
  },
  birthday: {
    source: ANIMATIONS.birthday,
    scale: 1.0,
    width: 40,
    height: 40,
  },
  born: {
    source: ANIMATIONS.born,
    scale: 1.0,
    width: 40,
    height: 40,
  },
  diamond: {
    source: ANIMATIONS.diamond,
    scale: 2.0,
    width: 40,
    height: 40,
  },
  NFC: {
    source: ANIMATIONS.NFC,
    scale: 1.25,
    width: 24,
    height: 24,
  },
  shopping: {
    source: ANIMATIONS.shopping,
    scale: 1.0,
    width: 20,
    height: 20,
  },
  pet_service: {
    source: ANIMATIONS.pet_service,
    scale: 1.25,
    width: 20,
    height: 20,
  },
  social: {
    source: ANIMATIONS.social,
    scale: 1.0,
    width: 28,
    height: 28,
  },
  emergency: {
    source: ANIMATIONS.emergency,
    scale: 1.0,
    width: 28,
    height: 28,
  },
};

const Icon3D = ({ type, loop = true }) => {
  const { width, height, scale } = TYPES[type];

  return (
    <View>
      <LottieView
        source={TYPES[type].source}
        style={{
          transform: [{ scale }],
          width,
          height,
        }}
        resizeMode="contain"
        loop={loop}
        autoPlay
      />
    </View>
  );
};

export default Icon3D;
