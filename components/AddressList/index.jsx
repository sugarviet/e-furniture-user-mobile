import { ScrollView, Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import useNavigation from '../../hooks/useNavigation';
import AddressCard from '../AddressCard';
import ButtonModal from '../ButtonModal';

const addressList = [
    {
        id: 1,
        first_name: 'Giang',
        last_name: 'Vũ Trường',
        phone: '0981890260',
        province: 'TP. Hồ Chí Minh',
        district: ' Quận 9',
        ward: 'phường Hiệp Phú',
        address: '58/19, Tân Lập 1',
        default: true,
    },
    {
        id: 2,
        first_name: 'Việt',
        last_name: 'Đặng Hoàng',
        phone: '0124131251',
        province: 'TP. Hồ Chí Minh',
        district: 'Quận 7',
        ward: 'phường Tân Hưng',
        address: '217 D2',
        default: false,
    },
    {
        id: 3,

        first_name: 'Khôi',
        last_name: 'Lê Thế',
        phone: '0978120511',
        province: 'TP. Hồ Chí Minh',
        district: 'Quận Gò Vấp',
        ward: 'phường 10',
        address: '213 Quang Trung',
        default: false,
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
                onPress={() => {
                    go_to_add_new_address("add");
                }}
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