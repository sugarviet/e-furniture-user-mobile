import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Pressable, Text, View } from "react-native";
import { ICONS } from "../../constants/icons";
import useNavigation from '../../hooks/useNavigation';

const DeliveryTrackingBrief = ({ data }) => {

    const { go_to_delivery_tracking } = useNavigation();

    const currentTracking = data.current_order_tracking.note
    const currentTrackingName = data.current_order_tracking.name

    return (
        <Pressable
            onPress={() => {
                go_to_delivery_tracking({ orderTracking: JSON.stringify(data) });
            }}
            style={{ flex: 1 }}
            className="border-b border-grey5 flex flex-row justify-between items-center py-4 px-2"
        >
            <View style={{ flex: 1 }} className="flex flex-row gap-2 items-center">
                <FontAwesome5 name="shipping-fast" size={16} color="#26aa99" />
                <Text className="font-urbanistRegular text-[14px] text-[#26aa99] max-w-[300px]">
                    {currentTrackingName === "Cancelled" ?
                        `Cancel with reason: ${currentTracking}`
                        : currentTrackingName === "Done" ?
                            "Successfully delivered" :
                            currentTracking}
                </Text>
            </View>
            <Entypo name={ICONS.enTypo_arrow_right} size={16} color="black" />
        </Pressable>
    );
};

export default DeliveryTrackingBrief;
