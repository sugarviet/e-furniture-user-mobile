import { Pressable, Text, View } from "react-native";
import CircleCheckbox from "../CircleCheckbox";
import Icon from '../Icon';
import PressableContainer from "../PressableContainer";

const PaymentCard = ({ data, selectPayment, handleSelectPayment }) => {

    return (
        <PressableContainer onPress={() => handleSelectPayment(data.method)}>
            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center justify-between px-5 py-6 shadow-sm mx-1'>
                <View className="flex flex-row items-center">
                    <Icon source={data.image} style={{ width: 28, height: 28 }} />
                    <Text className='font-bold text-base pl-3'>{data.name}</Text>
                </View>
                <Pressable>
                    <CircleCheckbox checked={selectPayment === data.method} handlePress={() => handleSelectPayment(data.method)} color="#f8dddd" />
                </Pressable>
            </View>
        </PressableContainer>
    )
}

export default PaymentCard