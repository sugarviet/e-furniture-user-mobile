import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { IMAGES } from '../../constants/image';
import ButtonModal from '../ButtonModal';
import PopupModal from '../Modal';
import PaymentCard from '../PaymentCard';
import { PAYMENT_METHOD } from '../../constants/paymentMethod';
import useNavigation from '../../hooks/useNavigation';


const paymentList = [
    {
        method: PAYMENT_METHOD.cod,
        name: 'COD',
        image: IMAGES.cod,
    },
    {
        method: PAYMENT_METHOD.banking,
        name: 'Online Payment VietQR',
        image: IMAGES.vietqr,
    }
]


const PaymentList = () => {

    const { go_to_home, go_to_order } = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const [selectPayment, setSelectPayment] = useState(PAYMENT_METHOD.cod);

    const handleSelectPayment = (payment) => {
        setSelectPayment(payment)
    }

    const handleBackToHome = () => {
        setModalVisible(!modalVisible)
        go_to_home();
    }

    const handleGoToOrder = () => {
        setModalVisible(!modalVisible)
        go_to_order();
    }

    return (
        <View className="h-full relative bg-white">
            <View className="px-4 pt-4">
                <Text className="text-[16px] font-urbanistMedium">Select the payment method you want to use.</Text>
            </View>
            <ScrollView className="px-2 py-4 mt-4" style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                {paymentList?.map((payment) => (
                    <View key={payment.method} className="pb-6">
                        <PaymentCard data={payment} selectPayment={selectPayment} handleSelectPayment={handleSelectPayment} />
                    </View>
                ))}
            </ScrollView>
            <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-t-grey5 px-5 bg-white"
            >
                <View className="flex justify-center h-full">
                    <ButtonModal type="addNewAddress">
                        <View className="flex flex-row items-center">
                            <Text className="text-white font-urbanistSemiBold">Confirm Payment</Text>
                        </View>
                    </ButtonModal>
                </View>
            </Pressable>

            <PopupModal type="success" modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <Pressable onPress={handleGoToOrder} className="w-full pt-8">
                    <ButtonModal type="viewOrder">
                        <Text className="text-white font-urbanistSemiBold">View Order</Text>
                    </ButtonModal>
                </Pressable>
                <Pressable onPress={handleBackToHome} className="w-full pt-3 pb-2">
                    <ButtonModal type="goToHome">
                        <Text className="text-black font-urbanistSemiBold">Back To Home</Text>
                    </ButtonModal>
                </Pressable>
            </PopupModal>

        </View>
    )
}
export default PaymentList