import React, { useEffect, useState } from 'react';
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



function FlashSaleScreen({ data, ...props }) {

    const initialFlashSales = {};

    data.forEach((sale) => {
        if (sale.FlashSales.length > 0) {
            initialFlashSales[sale.Hour] = sale.FlashSales[0]._id;
        }
    });

    const currentHour = props.route.name.split(':')[0];

    const initialFlashSaleEachTimes = initialFlashSales[currentHour];

    const flashSaleWithTimes = data.find((sale) => sale.Hour + ":00" === props.route.name);

    const [activeFlashSale, setActiveFlashSale] = useState(initialFlashSaleEachTimes);
    const handleCategorySelect = (id) => {
        setActiveFlashSale(id);
    };

    const flashSales = flashSaleWithTimes.FlashSales;

    const filteredProducts = flashSales.find(flashSale => flashSale._id === activeFlashSale);

    return (
        <ScrollView className="bg-[#f5f5f5] ">
            <FlashSaleList data={flashSales} activeFlashSale={activeFlashSale} handleCategorySelect={handleCategorySelect} />
            <FlashSaleSlider pagination carouselData={productDetailCarousel} autoplay />
            <View className="flex flex-row gap-2 items-center pt-2 justify-end px-2">
                <Text className="font-urbanistLight text-grey2">{filteredProducts.status === 1 ? "ENDS IN" : "STARTS IN"}</Text>
                <CountDown
                    size={10}
                    until={2*60*60}
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
                {filteredProducts.products.map((product, index) => (
                    <FlashSaleProduct key={`${product._id} + ${index}`} data={product} status={filteredProducts.status} />
                ))}
            </View>
        </ScrollView>
    );
}

export default FlashSaleScreen;