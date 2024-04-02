import { Text, View, Image } from "react-native"
import { IMAGES } from "../../constants/image"

const TYPES = {
  order: {
    title: "You don't have an order yet",
    subTitle: "You don't have an active order at this time",
    image: IMAGES.order_not_found,
    imageWidth: 240,
    imageHeight: 240,
  },
  search: {
    title: "Not found :(",
    subTitle: "The keyword you are looking for is not defined",
    image: IMAGES.order_not_found,
    imageWidth: 240,
    imageHeight: 240,
  },
  bank: {
    title: "Not found :(",
    subTitle: "You don't have any bank account available",
    image: IMAGES.not_found_bank,
    imageWidth: 176,
    imageHeight: 128,
  }
}
const EmptyContent = ({ type }) => {

  const { title, subTitle, image, imageWidth, imageHeight } = TYPES[type]

  return (
    <View className='mx-auto my-auto flex justify-center items-center'>
      <Image source={image} style={{ width: imageWidth, height: imageHeight }} />
      <View className='mx-auto pt-12'>
        <Text className='text-center font-bold text-lg mb-2'>{title}</Text>
        <Text>{subTitle}</Text>
      </View>

    </View>
  )
}

export default EmptyContent