import { View } from 'react-native';
import AddressForm from '../../../../../components/AddressForm';

const Address = () => {
    return (
        <View className="h-full bg-white">
            <AddressForm type="edit"/>
        </View>
    )
}

export default Address