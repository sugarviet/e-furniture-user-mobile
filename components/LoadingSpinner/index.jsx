import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { ANIMATIONS } from "../../constants/animations";

const LoadingSpinner = () => {
  return (
    <View className="fixed top-0 left-0 right-0 bottom-0 flex-1 justify-center items-center">
      <LottieView
        className="w-24 h-24"
        autoPlay
        loop={true}
        source={ANIMATIONS.loading}
      />
    </View>
  );
};

export default LoadingSpinner;
