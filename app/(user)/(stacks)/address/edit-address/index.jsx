import { View } from 'react-native';
import AddressForm from '../../../../../components/AddressForm';
import EditAddressForm from '../../../../../components/EditAddressForm';

const Address = () => {
    return (
        <View className="h-full bg-white">
           <EditAddressForm/>
        </View>
    )
}

export default Address