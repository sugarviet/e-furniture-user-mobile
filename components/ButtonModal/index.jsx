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
    },
    addNewAddress: {
        icon: null,
        size: 24,
        bgColor: 'black'
    },
    updateUserProfile: {
        icon: null,
        size: 24,
        bgColor: 'black'
    }

};

const ButtonModal = ({ type, children, onPress }) => {
    const { size, bgColor } = TYPES[type];


    return (
        <TouchableOpacity className="w-full rounded-[40px] shadow-sm shadow-black" onPress={onPress}>
            <View style={{ backgroundColor: bgColor }} className="flex flex-row justify-center items-center py-5 rounded-[40px] bg-black shadow-2xl">
                <MaterialIcons name={TYPES[type].icon} size={size} color="white" />
                <View className="text-white font-urbanistSemiBold pl-3">{children}</View>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonModal