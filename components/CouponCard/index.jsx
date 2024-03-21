import Icon2D from "../Icon2D"
import { View, Text, Image } from "react-native"
import PressableContainer from "../PressableContainer"
import { IMAGES } from "../../constants/image"
import { Entypo } from '@expo/vector-icons';
import { ICONS } from "../../constants/icons";

const CouponCard = () => {
    return (
        <PressableContainer>
            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center justify-between px-5 py-6 shadow-sm mx-1'>
                <View className="flex flex-row items-center">
                    <Image
                        resizeMode="contain"
                        style={{ width: 28, height: 28 }}
                        source={IMAGES.coupon}
                    />
                    <Text className='font-bold text-base pl-3'>Choose Coupon</Text>
                </View>

                <View className=''>
                    <Entypo name={ICONS.enTypo_arrow_right} size={21} color="black" />
                </View>
            </View>

        </PressableContainer>
    )
}

export default CouponCard