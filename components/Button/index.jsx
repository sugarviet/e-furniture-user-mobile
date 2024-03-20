import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ICONS } from "../../constants/icons";

const TYPES = {
    cart: {
        icon: ICONS.mi_checkout,
        size: 24,
    },
    addToCart:{
        icon: ICONS.mi_checkout,
        size: 24,
    },
    remove:{
        icon: null,
        size: 24,
    }

};

const Button = ({ type, children }) => {
    const { size } = TYPES[type];
    return (
        <TouchableOpacity className="w-full rounded-[40px] h-full pl-2">
            <View className="flex flex-row justify-center items-center py-5 rounded-[40px] bg-black">
                <MaterialIcons name={TYPES[type].icon} size={size} color="white" />
                <Text className="text-white font-urbanistSemiBold pl-3">{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button