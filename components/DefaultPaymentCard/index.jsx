import { Entypo, MaterialIcons } from "@expo/vector-icons"
import React from 'react'
import { Text, View } from 'react-native'
import { ICONS } from "../../constants/icons"
import { PAYMENT_METHOD } from '../../constants/paymentMethod'
import { useCheckout } from '../../context/CheckoutContext'
import useNavigation from "../../hooks/useNavigation"
import PressableContainer from '../PressableContainer'

function DefaultPaymentCard() {
    const { go_to_payment_list } = useNavigation();

    const { selectedPayment } = useCheckout();

    return (
        <PressableContainer onPress={go_to_payment_list}>
            <View className="flex-row bg-white rounded-xl flex items-center justify-between px-5 py-6 shadow-sm mx-1">
                <View className="flex flex-row items-center">
                    <MaterialIcons name="payment" size={28} color="black" />
                    {!selectedPayment ?
                        <Text className="font-bold text-base pl-3">
                            Choose Payment
                        </Text>
                        :
                        <Text className="font-bold text-base pl-3">
                            Payment
                        </Text>
                    }
                </View>

                <View className="flex flex-row items-center gap-2">
                    {selectedPayment &&
                        <View>
                            {selectedPayment === PAYMENT_METHOD.cod ?
                                <View>
                                    <Text className="text-[14px] font-urbanistMedium text-center">Cash On Delivery</Text>
                                    <Text className="text-[11px] font-urbanistMedium">Need to pay with 10% deposit</Text>
                                </View>
                                :
                                <Text className="text-[14px] font-urbanistMedium text-center">Scan QR by VietQr</Text>
                            }
                        </View>
                    }
                    <Entypo
                        name={ICONS.enTypo_arrow_right}
                        size={21}
                        color="black"
                    />
                </View>
            </View>
        </PressableContainer>
    )
}

export default DefaultPaymentCard