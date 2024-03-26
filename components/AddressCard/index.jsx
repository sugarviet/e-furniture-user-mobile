import { Pressable, Text, View } from "react-native"
import { IMAGES } from "../../constants/image"
import Icon from "../Icon"
import Icon2D from "../Icon2D"
import PressableContainer from "../PressableContainer"
import useNavigation from "../../hooks/useNavigation"

const AddressCard = ({ data, onPress }) => {

    const { go_to_edit_address } = useNavigation();

    return (
        <PressableContainer onPress={onPress}>
            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center px-3 py-4 shadow-sm mx-1'>
                <View className="w-16 h-16 rounded-full bg-[#e3e3e3] flex justify-center items-center mr-3">
                    <View className='w-12 h-12 rounded-full bg-black flex justify-center items-center'>
                        <Icon2D name='location' size={20} activated="white" />
                    </View>
                </View>
                <View className='flex-1'>
                    <View className='flex-row items-center gap-4'>
                        <Text className='font-bold text-base max-w-[170px]' numberOfLines={1} ellipsizeMode='tail'>{data.address}</Text>
                        {data.default === true &&
                            <View className='bg-gray-200 rounded-md p-1'>
                                <Text className='text-xs'>Default</Text>
                            </View>
                        }
                    </View>
                    <Text className='font-bold text-sm'>{data.phone}</Text>
                    <Text numberOfLines={2} className="font-urbanistMedium text-grey2 pt-1">{data.ward}, {data.district}</Text>
                </View>
                <Pressable
                    onPress={() => {
                        go_to_edit_address(data, "edit");
                    }}
                    className='w-12 h-12 flex justify-center items-center'
                >
                    <Icon source={IMAGES.edit} className="w-[22px] h-[22px]" />
                </Pressable>
            </View>

        </PressableContainer>
    )
}

export default AddressCard