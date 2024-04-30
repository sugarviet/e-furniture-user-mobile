import { useLocalSearchParams } from "expo-router";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import useCancelOrder from '../../hooks/useCancelOrder';
import ConfirmModal from '../ConfirmModal';
import DefaultBankAccount from '../DefaultBankAccount';
import FormInput from '../FormInput';
function CancelOrderForm() {

    const params = useLocalSearchParams();
    const { data } = params;
    const cancelData = JSON.parse(data);

    console.log(cancelData);

    const { control, handleSubmit } = useForm();

    const { cancelOrder } = useCancelOrder(cancelData._id);

    const [selectedBank, setSelectedBank] = useState();
    const [isVisible, setIsVisible] = useState(false);

    const isCancelMethod = cancelData.payment_method === "Online Payment" || cancelData.order_checkout.paid.type === "Deposit"

    const isPaymentOnline = cancelData.payment_method === "Online Payment"

    const onSubmit = (values) => {
        let body;
        if (isCancelMethod) {
            body = {
                note: {
                    ...values,
                    account_number: selectedBank.account_number,
                    bank_account_name: selectedBank.bank_account_name,
                    bank_code: selectedBank.bank_code,
                    bank_name: selectedBank.bank_name
                }
            };
        } else {
            body = { note: values };
        }
        cancelOrder(body);
        setIsVisible(!isVisible)
    };

    return (
        <View className="flex-1">
            <Text className="m-2 pl-1 font-urbanistSemiBold">Reason:</Text>
            <FormInput className="shadow-sm h-12 bg-white rounded-md" type="reason" control={control} />
            {isPaymentOnline &&
                <>
                    <Text className="text-sm font-urbanistSemiBold m-2">Choose your bank account to receive refund amount.</Text>
                    <DefaultBankAccount setSelectedBank={setSelectedBank} />
                </>
            }
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)} className="flex items-center bg-white py-4 px-2 mt-12">
                <Text className="font-urbanistMedium text-red">Cancel Order</Text>
            </TouchableOpacity>
            <ConfirmModal
                onCancelPress={() => setIsVisible(!isVisible)}
                onActionPress={handleSubmit(onSubmit)}
                isVisible={isVisible}
                type="cancelOrder"
            />
        </View>
    )
}

export default CancelOrderForm