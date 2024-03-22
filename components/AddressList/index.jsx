import { ScrollView, Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import useNavigation from '../../hooks/useNavigation';
import AddressCard from '../AddressCard';
import ButtonModal from '../ButtonModal';

const addressList = [
    {
        id: 1,
        name: 'Vũ Trường Giang',
        phone: '0981890260',
        address: '58/19, Tân Lập 1, phường Hiệp Phú, Quận 9',
        default: true
    },
    {
        id: 2,
        name: 'Đặng Hoàng Việt',
        phone: '0124131251',
        address: '217 D2, phường Tân Hưng, Quận 7',
        default: false
    },
    {
        id: 3,
        name: 'Lê Thế Khôi',
        phone: '0978120511',
        address: '213 Quang Trung, phường 10, Quận Gò Vấp',
        default: false
    },
    {
        id: 4,
        name: 'Đặng Hoàng Việt',
        phone: '0124131251',
        address: '217 D2, phường Tân Hưng, Quận 7',
        default: false
    },
    {
        id: 5,
        name: 'Lê Thế Khôi',
        phone: '0978120511',
        address: '213 Quang Trung, phường 10, Quận Gò Vấp',
        default: false
    },
]



const AddressList = () => {

    const { go_to_add_new_address } = useNavigation();
    return (
        <View className="h-full relative bg-white">
            <ScrollView className="px-4 py-4 mt-4" style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                {addressList.map((address) => (
                    <View key={address.id} className="pb-6">
                        <AddressCard
                            
                            data={address}
                        />
                    </View>
                ))}
            </ScrollView>
            <Pressable
                className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-t-grey5 px-5 bg-white"
                onPress={go_to_add_new_address}
            >
                <View className="flex justify-center h-full">
                    <ButtonModal type="addNewAddress">
                        <View className="flex flex-row items-center">
                            <Text className="text-white font-urbanistSemiBold">Add New Address</Text>
                        </View>
                    </ButtonModal>
                </View>
            </Pressable>

        </View>
    )
}

export default AddressList