import { Text, View, Image } from "react-native"
import { IMAGES } from "../../constants/image"

const TYPES = {
    order: {
        title: "You don't have an order yet",
        subTitle: "You don't have an active order at this time"
    }
}
const EmptyContent = ({type}) => {
  return (
    <View className='mx-auto'>
        <Image source={IMAGES.empty} className='w-96 h-96'/>

        <View className='mx-auto'>
            <Text className='text-center font-bold text-lg mb-2'>{TYPES[type].title}</Text>
            <Text>{TYPES[type].subTitle}</Text>

        </View>

    </View>
  )
}

export default EmptyContent