import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CircleCheckbox({ checked, size, color, handlePress }) {
    let checkboxClass = `border rounded items-center justify-center border-[1px] w-5 h-5 my-${1} mr-${1}`;


    if (checked) {
        checkboxClass += ` bg-${color}`;
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <View className="w-6 h-6 border-[3px] rounded-full flex justify-center items-center">
                {checked && <View className="w-4 h-4 bg-black rounded-full">
                </View>}
            </View>
        </TouchableOpacity>
    );
}

export default CircleCheckbox;
