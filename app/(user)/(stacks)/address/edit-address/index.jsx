import { View } from 'react-native';
import EditAddressForm from '../../../../../components/EditAddressForm';
import { Stack } from 'expo-router';

const Address = () => {
    return (
        <View className="h-full">
            <Stack.Screen options={{ title: "Edit Address" }} />
            <EditAddressForm />
        </View>
    )
}

export default Address