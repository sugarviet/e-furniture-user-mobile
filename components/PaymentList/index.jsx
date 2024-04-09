import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { IMAGES } from '../../constants/image';
import { PAYMENT_METHOD } from '../../constants/paymentMethod';
import { useCheckout } from '../../context/CheckoutContext';
import useNavigation from '../../hooks/useNavigation';
import ButtonModal from '../ButtonModal';
import PopupModal from '../Modal';
import PaymentCard from '../PaymentCard';


const paymentList = [
    {
        method: PAYMENT_METHOD.cod,
        name: 'COD',
        description: 'Please be aware: If your order exceeds ₫1,000,000, you will be required to pay a 10% deposit upfront for the order.',
        image: IMAGES.cod,
    },
    {
        method: PAYMENT_METHOD.banking,
        name: 'Online Payment',
        description: 'Payment by scanning VietQR.',
        image: IMAGES.vietqr,
    }
]


const PaymentList = () => {

    const { selectedPayment, handleConfirmPayment } = useCheckout();
    const [selectPayment, setSelectPayment] = useState(selectedPayment);

    const handleSelectPayment = (payment) => {
        setSelectPayment(payment);
    }

    return (
        <View className="h-full relative bg-white">
            <View className="px-4 pt-4">
                <Text className="text-[16px] font-urbanistMedium">Select the payment method you want to use.</Text>
            </View>
            <ScrollView className="px-2 py-4 mt-4" style={{ marginBottom: 90, height: '100%', width: '100%' }}>
                {paymentList?.map((payment) => (
                    <View key={payment.method} className="pb-6">
                        <PaymentCard data={payment} selectedPayment={selectedPayment} selectPayment={selectPayment} handleSelectPayment={handleSelectPayment} />
                    </View>
                ))}
            </ScrollView>
            <Pressable
                onPress={() => handleConfirmPayment(selectPayment)}
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
        </View>
    )
}
export default PaymentList