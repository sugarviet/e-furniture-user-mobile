import React, { useState, useEffect } from 'react'
import styles from './style'
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import { ANIMATIONS } from '../../constants/animations';
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import useNavigation from '../../hooks/useNavigation';
import { IMAGES } from '../../constants/image';
import OrderStep from '../OrderStep';
import CheckoutProductCard from '../CheckoutProductCard';
import { formatCurrency } from '../../utils/formatCurrency';

const purchaseItems = [
    {
        attributes: { attributeType: {} },
        code: "987654321",
        createdAt: "2024-04-05T08:30:00.000Z",
        description: "Beautiful chair for your home",
        is_draft: false,
        is_published: true,
        model3D: "",
        name: "Elegant Chair",
        quantity_in_cart: 2,
        regular_price: 80000,
        sale_price: 60000,
        select_variation: [
            {
                color: "#ffffff",
                property_id: "abcdefg123456",
                sub_price: 0,
                variation_id: "zyxwvuts987654"
            }
        ],
        slug: "elegant-chair",
        thumbs: ["https://i.ibb.co/yRCdF5t/chair.webp"],
        type: "9876543210",
        updatedAt: "2024-04-05T10:45:00.000Z",
        variation: [
            {
                name: "color",
                properties: [
                    {
                        sub_price: 0,
                        value: "#ffffff",
                        _id: "abcdefg123456"
                    }
                ]
            }
        ]
    },
    {
        attributes: { attributeType: {} },
        code: "123456789",
        createdAt: "2024-04-06T12:00:00.000Z",
        description: "Stylish table for your living room",
        is_draft: false,
        is_published: true,
        model3D: "",
        name: "Modern Table",
        quantity_in_cart: 1,
        regular_price: 150000,
        sale_price: 120000,
        select_variation: [
            {
                color: "#c0c0c0",
                property_id: "123456789abc",
                sub_price: 0,
                variation_id: "987654321xyz"
            }
        ],
        slug: "modern-table",
        thumbs: ["https://i.ibb.co/b3WjhHR/simple-chair.jpg"],
        type: "9876543210",
        updatedAt: "2024-04-06T14:30:00.000Z",
        variation: [
            {
                name: "color",
                properties: [
                    {
                        sub_price: 0,
                        value: "#c0c0c0",
                        _id: "123456789abc"
                    }
                ]
            }
        ]
    }
];


export default function OrderSuccess() {


    const { go_to_home, go_to_order_detail } = useNavigation();

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={{ height: '100%', backgroundColor: '#fff', position: 'relative' }}>
                <View className="bg-blackPrimary h-[208px] overflow-hidden">
                    <LottieView
                        source={ANIMATIONS.confetti}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        resizeMode="cover"
                        loop={true}
                        autoPlay
                    />

                    <View style={styles.headerContent}>
                        <Text style={styles.headerContentText} className="font-urbanistBold">Thank you!</Text>
                        <Text style={styles.headerContentDes} className="font-urbanistMedium">You have successfully created an order</Text>
                    </View>
                    <View style={styles.bottomHeader}>
                        <Pressable
                            onPress={() => {
                                go_to_order_detail();
                            }}
                            style={styles.wrapperBottomHeader}
                        >
                            <Text style={styles.bottomHeaderText} className="font-urbanistRegular">View your order</Text>
                            <Image
                                source={IMAGES.angle_circle_right}
                                style={styles.angleImg}
                            />
                        </Pressable>
                        <View style={styles.overlay}>
                        </View>
                    </View>
                </View>
                <ScrollView >
                    <View className="pt-4 pb-8" >
                        <OrderStep type="Pending" />
                    </View>
                    <Text className="text-[16px] font-urbanistMedium px-5">Billing Address</Text>
                    <View style={styles.bodyContent}>
                        <View style={styles.addressContent}>
                            <Text style={styles.addressContentName} className="font-urbanistMedium">Vũ Trường Giang</Text>
                            <Text style={styles.addressContentDes} className="font-urbanistMedium">Phường Long Bình, Quận 9, 58/19, Tân Lập 1, Phường Hiệp Phú, Quận 9</Text>
                            <Text style={styles.addressContentDes} className="font-urbanistMedium">0981890260</Text>
                            <Text style={styles.addressContentDes} className="font-urbanistMedium">test@gmail.com</Text>
                        </View>
                        <View style={styles.codeContent}>
                            <Text style={styles.codeContentName} className="font-urbanistMedium">Order ID</Text>
                            <Text style={styles.codeContentDes} className="font-urbanistMedium">EFURNITURE-391EC23C</Text>
                        </View>
                        <View style={styles.paymentContent}>
                            <Text style={styles.paymentContentName} className="font-urbanistMedium">Payment method</Text>
                            <Text style={styles.paymentContentDes} className="font-urbanistMedium">
                                Cash On Delivery
                            </Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Order date</Text>
                            <Text style={styles.dateCreateContentDes} className="font-urbanistMedium">11:02, 09.04.2024</Text>
                        </View>
                        <Text className="text-[16px] font-urbanistMedium pt-8">Order items</Text>
                        <View style={styles.productContent}>
                            {purchaseItems.map((item) => (
                                <CheckoutProductCard key={item._id} cart={item} />
                            ))}
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Subtotal</Text>
                            <Text style={styles.dateCreateContentDes}>{formatCurrency(210000)}</Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Discount</Text>
                            <Text style={styles.dateCreateContentDes}>{formatCurrency(21000)}</Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Shipping</Text>
                            <Text style={styles.dateCreateContentDes}>{formatCurrency(0)}</Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Deposit</Text>
                            <Text style={styles.dateCreateContentDes}>{formatCurrency(0)}</Text>
                        </View>
                        <View style={styles.borderLine}></View>
                        <View style={styles.totalContent}>
                            <Text style={styles.totalContentName} className="font-urbanistBold">QUOTATION TOTAL</Text>
                            <Text style={styles.totalContentDes}>{formatCurrency(189000)}</Text>
                        </View>

                        <TouchableOpacity onPress={() => { go_to_home({}) }} className="w-full flex my-2 pt-4">
                            <View className="flex flex-row justify-center items-center px-6 py-[14px] rounded-md bg-black shadow-2xl">
                                <Text className="text-white">Done</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
