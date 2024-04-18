import { Text, View, Image } from "react-native"
import { IMAGES } from "../../constants/image"

const TYPES = {
  order: {
    title: "You don't have an order yet",
    subTitle: "You don't have an active order at this time",
    image: IMAGES.order_not_found,
    imageWidth: 240,
    imageHeight: 240,
    gap: 48,
  },
  search: {
    title: "Not found :(",
    subTitle: "The keyword you are looking for is not defined",
    image: IMAGES.order_not_found,
    imageWidth: 240,
    imageHeight: 240,
    gap: 48,
  },
  bank: {
    title: "Not found :(",
    subTitle: "You don't have any bank account available",
    image: IMAGES.not_found_bank,
    imageWidth: 176,
    imageHeight: 128,
    gap: 48,
  },
  coupon: {
    title: "Not found :(",
    subTitle: "You don't have any bank account available",
    image: IMAGES.not_found_voucher,
    imageWidth: 176,
    imageHeight: 140,
    gap: 48,
  },
  wishlist: {
    title: "Empty Wishlist",
    subTitle: "You don't have any wishlist item",
    image: IMAGES.empty_item,
    imageWidth: 240,
    imageHeight: 240,
    gap: 12,
  },
  cart: {
    title: "Empty Cart",
    subTitle: "You don't have any cart item",
    image: IMAGES.empty_item,
    imageWidth: 240,
    imageHeight: 240,
    gap: 12,
  },
  address: {
    title: "Empty Address",
    subTitle: "You don't have any address",
    image: IMAGES.not_found_address,
    imageWidth: 120,
    imageHeight: 210,
    gap: 12,
  }
}
const EmptyContent = ({ type }) => {

  const { title, subTitle, image, imageWidth, imageHeight, gap } = TYPES[type]

  return (
    <View className='mx-auto my-auto flex justify-center items-center'>
      <Image source={image} style={{ width: imageWidth, height: imageHeight }} />
      <View style={{ paddingTop: gap }} className='mx-auto'>
        <Text className='text-center font-bold text-lg mb-2'>{title}</Text>
        <Text>{subTitle}</Text>
      </View>

    </View>
  )
}

export default EmptyContent