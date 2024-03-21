import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ICONS } from "../../constants/icons";

const TYPES = {
    cart: {
        icon: ICONS.mi_checkout,
        size: 24,
        bgColor: 'black'
    },
    addToCart: {
        icon: ICONS.mi_checkout,
        size: 24,
        bgColor: 'black'
    },
    remove: {
        icon: null,
        size: 24,
        bgColor: 'black'
    },
    checkout: {
        icon: null,
        size: 24,
        bgColor: 'black'
    },
    viewOrder: {
        icon: null,
        size: 24,
        bgColor: 'black'
    },
    goToHome: {
        icon: null,
        size: 24,
        bgColor: '#e7e7e7'
    }

};

const ButtonModal = ({ type, children }) => {
    const { size, bgColor } = TYPES[type];
    return (
        <TouchableOpacity className="w-full rounded-[40px] pl-2">
            <View style={{ backgroundColor: bgColor }} className="flex flex-row justify-center items-center py-5 rounded-[40px] bg-black">
                <MaterialIcons name={TYPES[type].icon} size={size} color="white" />
                <View className="text-white font-urbanistSemiBold pl-3">{children}</View>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonModal