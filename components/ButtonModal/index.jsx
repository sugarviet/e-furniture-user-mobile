import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ICONS } from "../../constants/icons";

const TYPES = {
    cart: {
        icon: ICONS.mi_checkout,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    addToCart: {
        icon: ICONS.mi_checkout,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    remove: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    checkout: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    viewOrder: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    goToHome: {
        icon: null,
        size: 24,
        bgColor: '#e7e7e7',
        rounded: 40,
    },
    addNewAddress: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    updateUserProfile: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    cancel: {
        icon: null,
        size: 24,
        bgColor: 'gray',
        rounded: 40,
    },
    submit: {
        icon: null,
        size: 24,
        bgColor: 'black'
    },
    addBankAccount: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    removeBank: {
        icon: null,
        size: 24,
        bgColor: '#B7bdbf',
        rounded: 40,
    },
    setDefaultBank: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 40,
    },
    login: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 12,
    },
    register: {
        icon: null,
        size: 24,
        bgColor: 'black',
        rounded: 12,
    }
};

const ButtonModal = ({ type, children, onPress }) => {
    const { size, bgColor,rounded } = TYPES[type];


    return (
        <TouchableOpacity className={`w-full shadow-sm`} onPress={onPress}>
            <View style={{ backgroundColor: bgColor,borderRadius: rounded }} className={`flex flex-row justify-center items-center py-5 bg-black/5 shadow-2xl`}>
                <MaterialIcons name={TYPES[type].icon} size={size} color="white" />
                <View className="text-white font-urbanistSemiBold pl-3">{children}</View>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonModal