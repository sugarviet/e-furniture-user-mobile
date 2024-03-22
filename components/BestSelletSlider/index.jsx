import { useState, useEffect, useRef } from "react";
import {
  View,
  Dimensions,
  Image,
  Text
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

import styles from "./style";

const WIDTH_FULL = Dimensions.get("window").width
const ITEM_CAROUSEL_WIDTH = WIDTH_FULL * 0.8;

const TYPE = {
 
  default: {
    title: "flashsale",
    itemWidth: WIDTH_FULL,
    padding: 50,
    widthImg: WIDTH_FULL,
    heightImg: WIDTH_FULL,
    resizeMode: 'contain'
  },

};

export default function BestSelletSlider({ pagination = false, carouselData = [], type = 'default' }) {
  const { itemWidth, padding, widthImg, heightImg, resizeMode } = TYPE[type];
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem(padding, widthImg, heightImg)} key={carouselData.id}>
        <View className='box-border rounded-[50px]'>
          <Image source={{ uri: item.URI }} style={styles.imageItem(resizeMode)} />
       
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={WIDTH_FULL}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      {pagination && (
        <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.inactivePaginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      )}
    </View>
  );
}
