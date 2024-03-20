import LottieView from "lottie-react-native";
import {
    Image,
    Modal,
    Text,
    View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ANIMATIONS } from "../../constants/animations";
import { IMAGES } from "../../constants/image";


function SuccessModal({
    modalVisible,
    setModalVisible
}) {


    return (
        <View className="flex-1 justify-center items-center">
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View className="flex-1 justify-center items-center">
                    <View
                        style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}
                        className="w-[320px] bg-white rounded-[50px] px-[25px] pt-[15px] pb-[25px]"
                    >
                        <View className="flex items-center">
                            <View className="relative">
                                <LottieView
                                    className="w-56 h-56"
                                    autoPlay
                                    loop={false}
                                    source={ANIMATIONS.success_bg}
                                />
                                <View className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                    <Image
                                        resizeMode="contain"
                                        source={IMAGES.cart_success}
                                        className="w-20 h-20"
                                    />
                                </View>
                            </View>

                            <Text className="text-[24px] font-urbanistBold">Order Successful!</Text>
                            <Text className="text-[16px] font-urbanistRegular pt-4">You have successfully made order </Text>
                        </View>
                        <TouchableOpacity className="w-full rounded-[40px] pt-8">
                            <View className="flex flex-row justify-center items-center py-4 rounded-[40px] bg-black">
                                <Text className="text-white font-urbanistSemiBold pl-3">View Order</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className="w-full rounded-[40px] pt-3 pb-2">
                            <View className="flex flex-row justify-center items-center py-4 rounded-[40px] bg-[#e7e7e7]">
                                <Text className="text-black font-urbanistSemiBold pl-3">Back To Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default SuccessModal;
