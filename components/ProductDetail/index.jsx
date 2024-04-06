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
import ProductVariationList from "../ProductVariationList";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

function ProductDetail({ data }) {
  const [furniture, setFurniture] = useState(data);
  const {
    _id,
    thumbs,
    name,
    select_variation,
    variation,
    description,
    sale_price,
  } = furniture;
  const { get_average_rating, get_total_feedback, isLoading } =
    useFeedback(_id);
  const { addToCart } = useCart();
  const { go_to_review_products } = useNavigation();

  const handleGoToReviewProducts = () => {
    if (get_total_feedback()) {
      go_to_review_products(_id);
    }
  };

  const subPrice = select_variation.reduce(
    (total, cur) => total + cur.sub_price,
    0
  );

  if (isLoading) return <LoadingSpinner />;
  return (
    <View style={{ height: "100%", backgroundColor: COLORS.white }}>
      <View style={{ height: 260 }}>
        <CarouselSlider pagination type="productDetail" carouselData={thumbs} />
      </View>
      <ScrollView className="bg-white flex-1 rounded-t-xl mt-2 px-5 py-6 relative">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-black text-[28px] font-urbanistBold">
            {name}
          </Text>
          {/* <FavoriteButton id={data._id} /> */}
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
        <ProductVariationList
          selectVariation={select_variation}
          onUpdate={(updated_select_variation) =>
            setFurniture({
              ...furniture,
              select_variation: updated_select_variation,
            })
          }
          className="mt-2"
          data={variation}
        />
        <View className="mt-2">
          <Text className="text-black text-[18px] font-urbanistBold">
            Description
          </Text>
          <Text className="text-black text-[13px] font-urbanistLight pt-2">
            {description}
          </Text>
        </View>
      </ScrollView>

      <View className="shadow-md border-t border-x pb-8 border-grey5 bg-white">
        <View className="flex-row items-center pl-6">
          <View className="flex-row justify-end items-center flex-1">
            <View className="mr-2">
              <Text className="text-xs font-urbanistRegular text-grey1">
                Total price:
              </Text>
              <Text className="text-lg font-urbanistBold">
                {formatCurrency(sale_price + subPrice)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                addToCart(furniture);
              }}
              className="w-40 bg-black flex-row h-16 items-center justify-center"
            >
              <MaterialIcons size={20} color="white" name={ICONS.mi_checkout} />
              <Text className="text-white font-urbanistSemiBold">
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default withFetchData(ProductDetail, get_furniture_detail_api);
