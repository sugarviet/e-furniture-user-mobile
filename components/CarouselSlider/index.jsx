import { useState, useEffect, useRef } from "react";
import {
  View,
  Dimensions,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import styles from "./style";

const WIDTH_FULL = Dimensions.get("window").width
const ITEM_CAROUSEL_WIDTH = WIDTH_FULL * 0.8;

const TYPE = {
  productDetail: {
    title: "productDetail",
    itemWidth: WIDTH_FULL,
    padding: 0,
    widthImg: WIDTH_FULL,
    heightImg: WIDTH_FULL,
    resizeMode: 'contain'
  },
  default: {
    title: "default",
    itemWidth: ITEM_CAROUSEL_WIDTH * 1.2,
    heightImg: 200,

  },
};

export default function CarouselSlider({ pagination = false, carouselData = [], type = 'default' }) {
  const { itemWidth, padding, widthImg, heightImg, resizeMode } = TYPE[type];
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem(padding, widthImg, heightImg)} key={carouselData.id}>
        <Image source={{ uri: item.URI }} style={styles.imageItem(resizeMode)} />
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
