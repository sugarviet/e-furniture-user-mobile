import React from 'react';
import { ScrollView, Text } from 'react-native';
import { IMAGES } from '../../constants/image';
import FlashSaleList from '../FlashSaleList';
import FlashSaleProduct from '../FlashSaleProduct';
import FlashSaleSlider from '../FlashSaleSlider';
import { View } from 'react-native';
import CountDown from 'react-native-countdown-fixed';

const productDetailCarousel = [
    { id: 1, image: IMAGES.flashsale_slider },
    { id: 2, image: IMAGES.flashsale_slider2 },
];

const flashSaleProduct = [
    {
        id: 1,
        name: 'Blue Chair For Couple',
        regular_price: 1000000,
        sale_price: 800000,
        percentage: 20,
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_aeva36.png',
        sold: 5,
        slug:'brazil-sofa'
    },
    {
        id: 2,
        name: 'Decorative Wall Lamp',
        regular_price: 3000000,
        sale_price: 2700000,
        percentage: 10,
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_1_o0ad5x.png',
        sold: 12,
        slug:'france-sofa'
    },
    {
        id: 3,
        name: 'Pink Chair For Viet',
        regular_price: 12000000,
        sale_price: 10200000,
        percentage: 15,
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_3_mjpx4y.png',
        sold: 8,
        slug:' chair'
    },
    {
        id: 4,
        name: 'Living Room Chair',
        regular_price: 6500000,
        sale_price: 6175000,
        percentage: 5,
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_2_wb1znh.png',
        sold: 2,
        slug:'sofa-vietnam'
    },
    {
        id: 5,
        name: 'Decorative Wall Lamp',
        regular_price: 3000000,
        sale_price: 2700000,
        percentage: 10,
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_1_o0ad5x.png',
        sold: 12,
        slug:'brazil-sofa'
    },
    {
        id: 6,
        name: 'Pink Chair For Viet',
        regular_price: 12000000,
        sale_price: 10200000,
        percentage: 15,
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_3_mjpx4y.png',
        sold: 8,
        slug:'france-sofa'
    },
    {
        id: 7,
        name: 'Living Room Chair',
        regular_price: 6500000,
        sale_price: 6175000,
        percentage: 5,
        url: 'https://res.cloudinary.com/dc4hafqoa/image/upload/v1712247869/eFurniture/images-removebg-preview_2_wb1znh.png',
        sold: 2,
        slug:'chair'
    },
]


function FlashSaleScreen() {


    return (
        <ScrollView className="bg-[#f5f5f5] ">
            <FlashSaleList />
            <FlashSaleSlider pagination carouselData={productDetailCarousel} autoplay />
            <View className="flex flex-row gap-2 items-center pt-2 justify-end px-2">
                <Text className="font-urbanistLight text-grey2">ENDS IN</Text>
                <CountDown
                    size={10}
                    until={15}
                    digitStyle={{ backgroundColor: '#000', borderWidth: 1, borderColor: '#000' }}
                    digitTxtStyle={{ color: '#fff' }}
                    timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                    separatorStyle={{ color: '#000' }}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{ m: null, s: null }}
                    showSeparator
                />
            </View>
            <View className="mt-2">
            {flashSaleProduct.map((sale, index) => (
                <FlashSaleProduct key={`${sale} + ${index}`} data={sale} />
            ))}
            </View>
        </ScrollView>
    )
}

export default FlashSaleScreen