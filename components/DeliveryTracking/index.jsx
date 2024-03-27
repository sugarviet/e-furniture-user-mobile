import { ScrollView, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const DeliveryTracking = () => {

    const params = useLocalSearchParams();

    const dataTracking = JSON.parse(params.orderTracking);
    console.log(dataTracking)
    return (
        <View>
            <Text>hi</Text>
        </View>
    )
}

export default DeliveryTracking