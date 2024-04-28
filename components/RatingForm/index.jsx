import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CenteredDivider from "../CenteredDivider";
import { COLORS } from "../../constants";
import ButtonModal from "../ButtonModal";
import { formatCurrency } from "../../utils/formatCurrency";
import { useForm } from "react-hook-form";
import FormInputBottomSheet from "../FormInputBottomSheet";
import FormRating from "../FormRating";
import useNotification from "../../hooks/useNotification";

import { useFetch, usePost } from "../../hooks/api-hooks";
import { handle_feedback } from "../../api/feedbackUrl";
import { get_order_by_state } from "../../api/orderHistoryApi";
import { useEffect, useState, forwardRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

const RatingForm = forwardRef(({ orderBriefInfoCard, orderCode }, ref) => {
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm();
  const { success_message, error_message } = useNotification();
  const { mutate } = usePost(
    handle_feedback(),
    undefined,
    () => {
      success_message(null, null, 'Feedback sent successfully')
      ref.current?.close();
    },
    () => {
      error_message(null, null, 'Feedback sent failed')
    },
    get_order_by_state("Done")
  );

  const onSubmit = (data) => {
    const body = {
      order_code: orderCode,
      product_id: orderBriefInfoCard.product_id._id,
      rating: data.rating,
      content: data.content,
    };
    mutate(body);
  };

  return (
    <SafeAreaView className="px-2 h-full">
      <Text className="text-center font-bold text-2xl my-2">
        Leave a Review
      </Text>
      <CenteredDivider color={COLORS.lightGray} thickness={0.5} />

      <View className="w-full mx-auto flex justify-center px-6">
        <View
          key={orderBriefInfoCard.product_id}
          className="flex flex-row gap-4 pt-2 mb-4"
        >
          <View className="border border-grey4 px-2 py-2 rounded-xl">
            <Image
              resizeMode="contain"
              style={{ width: 90, height: 90 }}
              source={{
                uri: orderBriefInfoCard.product.thumbs[0],
              }}
            />
          </View>

          <View className="flex justify-between py-1 flex-row flex-1">
            <View>
              <View className="flex flex-row items-center justify-between">
                <Text
                  numberOfLines={2}
                  className="text-[20px] font-urbanistExtraBold max-w-[180px]"
                >
                  {orderBriefInfoCard.name}
                </Text>
              </View>
              <Text className="text-[18px] font-urbanistRegular text-grey1">
                x{orderBriefInfoCard.quantity}
              </Text>
              <View className="flex flex-row items-center gap-2 w-[215px] pt-3">
                <Text className="text-[19px] font-urbanistSemiBold line-through text-grey2">
                  20.000.000đ
                </Text>
                <Text className="text-[16px] font-urbanistSemiBold">
                  {formatCurrency(orderBriefInfoCard.price)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <CenteredDivider color={COLORS.lightGray} thickness={0.5} />

      <ScrollView className="mb-2">
        <View className="flex items-center gap-1 flex-1 mt-2">
          <Text className="text-2xl font-bold mb-2">How is your order ?</Text>
          <Text className="text-sm font-bold text-gray-500">
            Please give your rating & also share your review
          </Text>

          <View className="mb-2">
            <FormRating type="rating" control={control} defaultValue={4} />
          </View>

          <View className="w-full px-4 py-2">
            <FormInputBottomSheet type="content" control={control} />
          </View>
        </View>
      </ScrollView>

      <View className="flex flex-row w-full justify-between mb-6">
        <Pressable className="flex-1 mx-1">
          <ButtonModal type="cancel">
            <Text className="text-white font-urbanistSemiBold">Cancel</Text>
          </ButtonModal>
        </Pressable>
        <Pressable className="flex-1 mx-1" onPress={handleSubmit(onSubmit)}>
          <ButtonModal type="submit">
            <Text className="text-white font-urbanistSemiBold">Submit</Text>
          </ButtonModal>
        </Pressable>
      </View>
    </SafeAreaView>
  );
});

export default RatingForm;
