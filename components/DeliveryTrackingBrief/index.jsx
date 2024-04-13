import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Pressable, Text, View } from "react-native";
import { ICONS } from "../../constants/icons";
import useNavigation from '../../hooks/useNavigation';

const DeliveryTrackingBrief = ({ data }) => {

    const { go_to_delivery_tracking } = useNavigation();

    const currentTracking = data.current_order_tracking.note

    return (
        <Pressable
            onPress={() => {
                go_to_delivery_tracking({ orderTracking: JSON.stringify(data) });
            }}
            className="border-b border-grey5 flex justify-between flex-row items-center py-4"
        >
            <View className="flex flex-row gap-2 items-center">
                <FontAwesome5 name="shipping-fast" size={16} color="black" />
                <Text className="font-urbanistLight text-[14px]">{data.current_order_tracking.name === "Processing" ? "Efurniture staff is preparing the order" : currentTracking}</Text>
            </View>
            <Entypo name={ICONS.enTypo_arrow_right} size={16} color="black" />
        </Pressable>
    );
};

export default DeliveryTrackingBrief;
