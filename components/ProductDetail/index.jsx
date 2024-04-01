import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { ICONS } from "../../constants/icons";
import CarouselSlider from "../../components/CarouselSlider";
import { FontAwesome5 } from "@expo/vector-icons";
import ButtonModal from "../ButtonModal";
import { withFetchData } from "../../hocs/withFetchData";
import { get_furniture_detail_api } from "../../api/furnitureUrl";
import useFeedback from "../../hooks/useFeedback";
import { formatCurrency } from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";
import FavoriteButton from "../FavoriteButton";
import LoadingSpinner from "../LoadingSpinner";
import useNavigation from "../../hooks/useNavigation";

function ProductDetail({ data }) {
  const { get_average_rating, get_total_feedback, isLoading } = useFeedback(
    data._id
  );
  const { addToCart } = useCart();
  const { go_to_review_products } = useNavigation();

  const handleGoToReviewProducts = () => {
    if(get_total_feedback()){
      go_to_review_products(data._id)
    }
  }

  if (isLoading) return <LoadingSpinner />;
  return (
    <View style={{ height: "100%", backgroundColor: COLORS.white }}>
      <View style={{ height: 260 }}>
        <CarouselSlider
          pagination
          type="productDetail"
          carouselData={data.thumbs}
        />
      </View>
      <ScrollView className="bg-white w-full h-full rounded-t-xl mt-2 px-5 py-6 relative">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-black text-[28px] font-urbanistBold">
            {data.name}
          </Text>
          <FavoriteButton id={data._id} />
        </View>
        <View className="flex flex-row pt-2 items-center border-b pb-4 border-b-grey5">
          <View className="bg-[#ececec] px-2 py-1 rounded-md mr-4">
            <Text className="text-[11px] font-urbanistMedium">9.742 sold</Text>
          </View>
          <FontAwesome5 name={ICONS.fa_star_rating} size={16} color="black" />
          <TouchableOpacity onPress={handleGoToReviewProducts}>
            <Text className="text-[11px] ml-2 font-urbanistMedium">
              {get_average_rating()} {`(${get_total_feedback()} reviews)`}
            </Text>

          </TouchableOpacity>
        </View>
        <View className="pt-3">
          <Text className="text-black text-[18px] font-urbanistBold">
            Description
          </Text>
          <Text className="text-black text-[13px] font-urbanistLight pt-2">
            {data.description}
          </Text>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 w-full h-[110px] border-t border-t-grey5 bg-white">
        <View className="flex flex-row justify-between px-5 pt-5">
          <View className="flex flex-col">
            <Text className="text-[12px] font-urbanistRegular text-grey1">
              Total price
            </Text>
            <Text className="text-[26px] font-urbanistBold">
              {formatCurrency(data.sale_price)}
            </Text>
          </View>
          <View className="w-[60%]">
            <ButtonModal onPress={() => addToCart(data)} type="addToCart">
              <Text className="text-white font-urbanistSemiBold">
                Add to cart
              </Text>
            </ButtonModal>
          </View>
        </View>
      </View>
    </View>
  );
}

export default withFetchData(ProductDetail, get_furniture_detail_api);
