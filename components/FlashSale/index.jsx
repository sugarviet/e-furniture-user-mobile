import { Feather } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { ICONS } from '../../constants/icons'
import { IMAGES } from '../../constants/image'
import FlashSaleScreen from '../FlashSaleScreen'
import HeaderButton from '../HeaderButton'
import TopTabNavigator from '../TopTabNavigator'

function LogoTitle() {
    return (
        <Image
            className="w-[100px] h-4"
            source={IMAGES.flashsale_white}
        />
    );
}

const TAB_TIMES = [
    { name: "9:00", status: "Ongoing" },
    { name: "12:00", status: "Coming Soon" },
    { name: "15:00", status: "Coming Soon" },
    { name: "18:00", status: "Coming Soon" },
    { name: "21:00", status: "Coming Soon" },
    { name: "0:00", status: "Coming Soon" },
];

function FlashSale() {
    return (
        <View className="flex-1">
            <Stack.Screen
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerTitleStyle: { color: 'white' },
                    headerTransparent: true,
                    headerLeft: () => <HeaderButton className="text-white" type="back_white" />,
                    headerRight: () => <Feather name={ICONS.feather_shopping_bag} size={20} color="white" />,
                }}

            />
            <ImageBackground source={IMAGES.flashsale_bg} resizeMode="stretch" className="w-full h-full pt-20">
                    <TopTabNavigator
                        TABS={TAB_TIMES}
                        Component={FlashSaleScreen}
                        type="flash_sale"
                    />
            </ImageBackground>
        </View>
    )
}

export default FlashSale