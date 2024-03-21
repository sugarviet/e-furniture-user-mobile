import Icon2D from "../Icon2D"
import { View, Text, Image } from "react-native"
import PressableContainer from "../PressableContainer"
import { IMAGES } from "../../constants/image"
const AddressCard = () => {
    return (
        <PressableContainer>
            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center px-5 py-4 shadow-sm mx-1'>
                <View className="w-16 h-16 rounded-full bg-[#e3e3e3] flex justify-center items-center mr-4">
                    <View className='w-12 h-12 rounded-full bg-black flex justify-center items-center'>
                        <Icon2D name='location' size={20} activated="white" />
                    </View>
                </View>
                <View className='flex-1'>
                    <View className='flex-row items-center gap-2'>
                        <Text className='font-bold text-lg'>Home</Text>
                        <View className='bg-gray-200 rounded-md p-1'>
                            <Text className='text-xs'>Default</Text>
                        </View>
                    </View>
                    <Text numberOfLines={2} className="font-urbanistMedium text-grey2 pt-1">217 D2 </Text>
                </View>
                <View className='w-12 h-12 flex justify-center items-center'>
                    <Image
                        resizeMode="contain"
                        style={{ width: 22, height: 22 }}
                        source={IMAGES.edit}
                    />
                </View>
            </View>

        </PressableContainer>
    )
}

export default AddressCard