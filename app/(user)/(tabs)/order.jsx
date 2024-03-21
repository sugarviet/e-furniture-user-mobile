import { Text, View } from "react-native"
import OrderStep from "../../../components/OrderStep"
import AddressCard from "../../../components/AddressCard"
const Order = () => {
  return (
    <View className='bg-white flex-1'>
        
        <OrderStep />

        <AddressCard />
    </View>
  )
}

export default Order