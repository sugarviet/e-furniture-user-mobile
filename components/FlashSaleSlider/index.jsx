import { useState, useEffect, useRef } from "react";
import { View, Dimensions, Image, Text } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

import styles from "./style";
import { IMAGES } from "../../constants/image";

const WIDTH_FULL = Dimensions.get("window").width;
const ITEM_CAROUSEL_WIDTH = WIDTH_FULL * 0.8;

const TYPE = {
    default: {
        title: "flashsale",
        itemWidth: WIDTH_FULL,
        widthImg: WIDTH_FULL,
        heightImg: WIDTH_FULL,
        resizeMode: "contain",
    },
};

export default function FlashSaleSlider({
    pagination = false,
    carouselData = [],
    autoplay = false,
    type = "default",
    speed = 3000,
}) {
    const { itemWidth, resizeMode } = TYPE[type];
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    const renderItem = ({ item }) => {
        return (
            <View
                key={carouselData.id}
            >
                <Image
                    source={item.image}
                    style={styles.imageItem(resizeMode)}
                />
            </View>
        );
    };

    useEffect(() => {
        if (autoplay && carouselRef.current) {
          const autoplayInterval = setInterval(() => {
            if (activeSlide < carouselData.length - 1) {
              carouselRef.current.snapToNext();
            } else {
              carouselRef.current.snapToItem(0);
            }
          }, speed); 
          return () => clearInterval(autoplayInterval);
        }
      }, [autoplay, activeSlide, carouselData.length]);

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
