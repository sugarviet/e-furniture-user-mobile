import Icon2D from "../Icon2D"
import { View, Text, Image } from "react-native"
import PressableContainer from "../PressableContainer"
import { IMAGES } from "../../constants/image"
import { Entypo } from '@expo/vector-icons';
import { ICONS } from "../../constants/icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "../Icon";

const ShippingCard = () => {
    return (
        <PressableContainer>
            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center justify-between px-5 py-6 shadow-sm mx-1'>
                <View className="flex flex-row items-center">
                    <Icon source={IMAGES.shipping_car} style={{ width: 28, height: 28 }} />
                    <View className="flex flex-col pl-3">
                        <Text className='font-urbanistBold text-base'>EFX Express Delivery</Text>
                        <Text className="font-urbanistMedium text-grey2">Expected: DEC 21 - 22</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="check-decagram-outline" size={21} color="black" />
            </View>

        </PressableContainer>
    )
}

export default ShippingCard