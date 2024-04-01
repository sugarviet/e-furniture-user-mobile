import { Text, View, Image } from "react-native"
import { IMAGES } from "../../constants/image"

const TYPES = {
    order: {
        title: "You don't have an order yet",
        subTitle: "You don't have an active order at this time"
    },
    search: {
      title: "Not found :(",
        subTitle: "The keyword you are looking for is not defined"
    },
    review: {
      title: "Not found :(",
        subTitle: "The rating you are looking for is not defined"
    }
}
const EmptyContent = ({type}) => {
  return (
    <View className='mx-auto my-auto'>
        <Image source={IMAGES.order_not_found} className='w-60 h-60'/>
        <View className='mx-auto pt-12'>
            <Text className='text-center font-bold text-lg mb-2'>{TYPES[type].title}</Text>
            <Text>{TYPES[type].subTitle}</Text>

        </View>

    </View>
  )
}

export default EmptyContent