import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { ICONS } from "../../constants/icons";
import CarouselSlider from "../../components/CarouselSlider";
import { FontAwesome5, FontAwesome, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import InteractiveIcon3D from "../InteractiveIcon3D";
import QuantityOption from "../QuantityOption";
import ButtonModal from "../ButtonModal";
const productDetailCarousel = [
    { id: 1, URI: "https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1710746885~exp=1710750485~hmac=5daff58b0442d6c3540e68bbf6fb30f07b7e4d802e0ee1b24d02b507a56f8f07&w=826" },
    { id: 2, URI: "https://img.freepik.com/free-psd/armchair-pillow_176382-860.jpg?t=st=1710746882~exp=1710750482~hmac=809a8b8bfd6ab7b349537ced2c12298fa0289788662db717a3ebbcecd18ea98d&w=826" },
    {
        id: 3,
        URI: "https://img.freepik.com/free-psd/living-room-with-white-sofa_176382-611.jpg?t=st=1710746882~exp=1710750482~hmac=0dba332b363375b81619873ebc3c0bf6c07828b02094febbdfd251ef13aab78d&w=996",
    },
];


export default function ProductDetail() {


    return (
        <View style={{ height: '100%', backgroundColor: COLORS.white }}>
            <View style={{ height: 260 }}>
                <CarouselSlider pagination type="productDetail" carouselData={productDetailCarousel} />
            </View>
            <ScrollView className="bg-white w-full h-full rounded-t-xl mt-2 px-5 py-6 relative">
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-black text-[28px] font-urbanistBold">Mid Century Sofa</Text>
                    <InteractiveIcon3D type="heart" />
                </View>
                <View className="flex flex-row pt-2 items-center border-b pb-4 border-b-grey5">
                    <View className="bg-[#ececec] px-2 py-1 rounded-md mr-4">
                        <Text className="text-[11px] font-urbanistMedium">9.742 sold</Text>
                    </View>
                    <FontAwesome5 name={ICONS.fa_star_rating} size={16} color="black" />
                    <Text className="text-[11px] ml-2 font-urbanistMedium">4.8 (6.573 reviews)</Text>
                </View>
                <View className="pt-3">
                    <Text className="text-black text-[18px] font-urbanistBold">Description</Text>
                    <Text className="text-black text-[13px] font-urbanistLight pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                </View>
                <View className="pt-3">
                    <Text className="text-black text-[18px] font-urbanistBold">Color</Text>
                    <View className="flex flex-row gap-3 items-center pt-2">
                        <AntDesign name={ICONS.antDesign_check_circle} size={40} color="#7a5547" />
                        <FontAwesome name={ICONS.fa_circle} size={48} color="#607d8a" />
                        <FontAwesome name={ICONS.fa_circle} size={48} color="#9d28ac" />
                        <FontAwesome name={ICONS.fa_circle} size={48} color="#797979" />
                        <FontAwesome name={ICONS.fa_circle} size={48} color="#3f51b2" />
                        <FontAwesome name={ICONS.fa_circle} size={48} color="#009689" />
                    </View>
                </View>
                <View className="pt-5 flex flex-row items-center  pb-40">
                    <Text className="text-black text-[18px] font-urbanistBold mr-4">Quantity</Text>
                    <QuantityOption name="productDetail" className="py-3 px-6" />
                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 w-full h-[110px] border-t border-t-grey5 bg-white">
                <View className="flex flex-row justify-between px-5 pt-5">
                    <View className="flex flex-col">
                        <Text className="text-[12px] font-urbanistRegular text-grey1">Total price</Text>
                        <Text className="text-[26px] font-urbanistBold">2.800.000đ</Text>
                    </View>
                    <View className="w-[60%]">
                        <ButtonModal type="addToCart">
                            <Text className="text-white font-urbanistSemiBold">Add to cart</Text>
                        </ButtonModal>
                    </View>
                </View>
            </View>
        </View>
    );
};
