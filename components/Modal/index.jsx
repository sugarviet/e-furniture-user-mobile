import LottieView from "lottie-react-native";
import {
    Image,
    Modal,
    Text,
    View,
    Pressable
} from "react-native";
import { ANIMATIONS } from "../../constants/animations";
import { IMAGES } from "../../constants/image";
import Overlay from "../Overlay";

const TYPES = {
    success: {
        image: IMAGES.cart_success,
        width: 80,
        height: 80,
        title: "Order Successful!",
        description: "You have successfully made order "
    },

};

function PopupModal({
    modalVisible,
    type,
    children
}) {

    const { width, height, title, description } = TYPES[type];

    return (
        <>
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
                                            style={{
                                                width,
                                                height
                                            }}
                                            resizeMode="contain"
                                            source={TYPES[type].image}
                                        />
                                    </View>
                                </View>
                                <Text className="text-[24px] font-urbanistBold">{title}</Text>
                                <Text className="text-[16px] font-urbanistRegular pt-4">{description}</Text>
                                {children}

                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
            {modalVisible &&
                <Overlay />
            }
        </>
    );
}

export default PopupModal;
