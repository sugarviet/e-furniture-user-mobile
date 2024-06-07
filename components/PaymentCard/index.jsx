import { Pressable, Text, View } from "react-native";
import CircleCheckbox from "../CircleCheckbox";
import Icon from '../Icon';
import PressableContainer from "../PressableContainer";

const PaymentCard = ({ data, selectPayment, handleSelectPayment }) => {

    return (
        <PressableContainer onPress={() => handleSelectPayment(data.method)}>
            <View className='flex-row bg-white rounded-3xl flex gap-1 items-center justify-between px-5 py-6 shadow-sm mx-1'>
                <View className="flex flex-row items-center">
                    <Icon source={data.image} style={{ width: 36, height: 36 }} />
                    <View className="flex flex-col items-start pl-3">
                        <Text className='font-bold text-base'>{data.name}</Text>
                        <Text className='text-[12px] font-urbanistBold mt-[0.5rem] max-w-[260px]'>
                        {data.description}
                            
                        </Text>
                    </View>
                </View>
                <Pressable>
                    <CircleCheckbox checked={selectPayment === data.method} handlePress={() => handleSelectPayment(data.method)} color="#f8dddd" />
                </Pressable>
            </View>
        </PressableContainer>
    )
}

export default PaymentCard