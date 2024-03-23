import { View } from 'react-native';
import AddressForm from '../../../../../components/AddressForm';

const Address = () => {
    return (
        <View className="h-full bg-white">
            <AddressForm type="add" />
        </View>
    )
}

export default Address