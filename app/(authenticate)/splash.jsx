import { Text, View } from "react-native";
import AnimationView from "../../components/AnimationView";
import {ANIMATIONS} from "../../constants/animations"

const SplashScreen = () => {
    return (
        <View className="flex-1 justify-center items-center bg-black">
            <AnimationView source={ANIMATIONS.logo} className="w-80 h-80"/>
        </View>
    )
}

export default SplashScreen