import Icon2D from "../Icon2D"
import { View, Text } from "react-native"
import PressableContainer from "../PressableContainer"
const AddressCard = () => {
  return (
    <PressableContainer>
    <View className='flex-row bg-white rounded-lg flex gap-1 items-center px-4 py-3 shadow-md'>
        <View className='w-12 h-12 rounded-full bg-black flex justify-center items-center mr-4'>
            <Icon2D name='location' size={20} activated="white"/>
        </View>
        <View className='flex-1'>
            <View className='flex-row items-center gap-2'>
            <Text className='font-bold text-lg'>Home</Text>
            <View className='bg-gray-200 rounded-md p-1'>
                <Text className='text-xs'>Default</Text>
            </View>
            </View>
            <Text>217 D2</Text>
        </View>
        <View className='w-12 h-12 flex justify-center items-center'>
            <Icon2D name='edit'activated="black" size={24}/>

        </View>
    </View>

    </PressableContainer>
  )
}

export default AddressCard