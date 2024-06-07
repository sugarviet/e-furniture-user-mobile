import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { ANIMATIONS } from "../../constants/animations"

const SplashScreen = ({
    onAnimationFinish = (isCancelled) => {}
}) => {
    return (
        <View className="flex-1 justify-center items-center bg-black">
            <LottieView
                className="w-80 h-80"
                autoPlay
                loop={false}
                source={ANIMATIONS.logo}
                onAnimationFinish={onAnimationFinish}
            />
        </View>
    )
}

export default SplashScreen