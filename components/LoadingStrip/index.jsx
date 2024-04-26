import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { ANIMATIONS } from "../../constants/animations";
import { Button, Overlay, Icon } from '@rneui/themed';
const LoadingStrip = () => {
  return (
    <Overlay isVisible={true} backdropStyle={{backgroundColor:'white'}}>
      <View className="">
        <View className="flex justify-center items-center">
          <LottieView
            className="w-32 h-32"
            autoPlay
            loop={true}
            source={ANIMATIONS.loading_strip}
          />
        </View>
      </View>
    </Overlay>
  );
};

export default LoadingStrip;
