import React from 'react';
import { ScrollView } from 'react-native';
import { IMAGES } from '../../constants/image';
import FlashSaleList from '../FlashSaleList';
import FlashSaleProduct from '../FlashSaleProduct';
import FlashSaleSlider from '../FlashSaleSlider';

const productDetailCarousel = [
    { id: 1, image: IMAGES.flashsale_slider },
    { id: 2, image: IMAGES.flashsale_slider2 },
];

function FlashSaleScreen() {
    return (
        <ScrollView className="bg-[#f5f5f5] ">
            <FlashSaleList />
            <FlashSaleSlider pagination carouselData={productDetailCarousel} autoplay /> 
            <FlashSaleProduct/>
        </ScrollView>
    )
}

export default FlashSaleScreen