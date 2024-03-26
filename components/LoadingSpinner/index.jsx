import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { ANIMATIONS } from "../../constants/animations"

const LoadingSpinner = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <LottieView
                className="w-56 h-56"
                autoPlay
                loop={true}
                source={ANIMATIONS.loading}
            />
        </View>
    )
}

export default LoadingSpinner