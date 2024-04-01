import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Stack, useLocalSearchParams } from "expo-router";
import useFeedback from '../../../../hooks/useFeedback';
import ReviewCard from '../../../../components/ReviewCard';
import ReviewChipList from '../../../../components/ReviewChipList';
import EmptyContent from '../../../../components/EmptyContent';
import LoadingSpinner from '../../../../components/LoadingSpinner';

const ProductReview = () => {
  const params = useLocalSearchParams();
  const { get_average_rating, get_total_feedback,get_feedback_at_rate, isLoading } = useFeedback(params.slug)
  const [activeCategory, setActiveCategory] = useState(0);
  const [listReview, setListReview] = useState(get_feedback_at_rate(activeCategory) || []);

  const onSelecetRate = (rate) => {
      const list = get_feedback_at_rate(rate); 
      setListReview(list);
      setActiveCategory(rate)
  }


  if(isLoading) return <LoadingSpinner />

  return (
    <View className='px-2 bg-white flex-1'>
      <Stack.Screen options={{ title: `${get_average_rating()} (${get_total_feedback()} reviews)` }} />

      <ReviewChipList onSelect={onSelecetRate} active={activeCategory} />


      {!listReview.length ? <EmptyContent type='review' /> : <FlatList data={listReview} keyExtractor={(item) => item._id} renderItem={({ item }) => (
        <ReviewCard data={item} />
      )} />}

    </View>
  )
}

export default ProductReview