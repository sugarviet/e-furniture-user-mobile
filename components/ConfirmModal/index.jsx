import { Overlay } from '@rneui/themed';
import {
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const TYPES = {
    address: {
        name: "Delete Address?",
        actionName: "Delete"
    },
    cancelOrder: {
        name: "Are you sure to cancel this order?",
        actionName: "Confirm"
    },
    bank: {
        name: "Delete Bank Account?",
        actionName: "Delete"
    },

};

function ConfirmModal({
    isVisible,
    type,
    onActionPress,
    onCancelPress
}) {

    const { name,actionName } = TYPES[type];

    return (
        <>
            <Overlay isVisible={isVisible} overlayStyle={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)' }} backdropStyle={{ backgroundColor: 'transparent' }}>
                <View className="flex-1 justify-center items-center">
                    <Modal animationType="fade" transparent={true} visible={true}>
                        <View className="flex-1 justify-center items-center">
                            <View
                                style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}
                                className="w-[340px] h-[95px] bg-white rounded "
                            >
                                <View className="flex-1 flex-col items-center ">
                                    <View className="basis-1/2 justify-center items-center flex-1 h-full">
                                        <Text className="text-base font-urbanistSemiBold">{name}</Text>
                                    </View>
                                    <View className="basis-1/2 flex flex-row justify-between h-full border-t border-grey5 w-full">
                                        <TouchableOpacity onPress={onCancelPress} className="flex-1 flex-row items-center justify-center">
                                            <Text className="text-base font-urbanistMedium">Cancel</Text>
                                        </TouchableOpacity>
                                        <View className="border-r border-grey5 h-full"></View>
                                        <TouchableOpacity onPress={onActionPress} className="flex-1 flex-row items-center justify-center">
                                            <Text className="text-base font-urbanistMedium text-orange-600">{actionName}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Overlay>
        </>
    );
}

export default ConfirmModal;
