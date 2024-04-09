import { Stack, useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import React from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ANIMATIONS } from '../../constants/animations';
import { IMAGES } from '../../constants/image';
import useNavigation from '../../hooks/useNavigation';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate, formatTime } from '../../utils/formatDate';
import OrderStep from '../OrderStep';
import ProductVariation from '../ProductVariation';
import styles from './style';
import { PAYMENT_METHOD } from "../../constants/paymentMethod";
import DepositPrice from "../DepositPrice";

export default function OrderSuccess() {

    const { go_to_home, go_to_order_detail } = useNavigation();

    const params = useLocalSearchParams();
    const { data } = params;
    const orderConfirmation = JSON.parse(data);
    console.log(orderConfirmation);


    const isPaidDeposit =
        orderConfirmation.order_checkout.paid.type === "Deposit";
    const totalPrice = orderConfirmation.order_checkout.total;

    const orderProduct = orderConfirmation.order_products || [];
    const orderShipping = orderConfirmation.order_shipping || {
        orderShipping: null,
    };

    const orderCheckout = orderConfirmation.order_checkout || {
        orderCheckout: null,
    };

    const discount = orderConfirmation.order_checkout.voucher
        ? formattedCurrency(
            (orderConfirmation.order_checkout.voucher.value / 100) * totalPrice
        )
        : "0,00đ";

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
                                go_to_order_detail(orderConfirmation.id);
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
                            <Text style={styles.addressContentName} className="font-urbanistMedium">{orderShipping.first_name} {orderShipping.last_name}</Text>
                            <Text style={styles.addressContentDes} className="font-urbanistMedium">{orderShipping.ward}, {orderShipping.district}, {orderShipping.address}</Text>
                            <Text style={styles.addressContentDes} className="font-urbanistMedium">{orderShipping.phone}</Text>
                            <Text style={styles.addressContentDes} className="font-urbanistMedium">{orderShipping.email}</Text>
                        </View>
                        <View style={styles.codeContent}>
                            <Text style={styles.codeContentName} className="font-urbanistMedium">Order ID</Text>
                            <Text style={styles.codeContentDes} className="font-urbanistMedium">{orderConfirmation.order_code}</Text>
                        </View>
                        <View style={styles.paymentContent}>
                            <Text style={styles.paymentContentName} className="font-urbanistMedium">Payment method</Text>
                            <View className="font-urbanistMedium">
                                {orderConfirmation.payment_method === PAYMENT_METHOD.cod ?
                                    <Text className="font-urbanistMedium">Cash On Delivery</Text>
                                    :
                                    <Text className="font-urbanistMedium">Scan QR by VietQr</Text>
                                }
                            </View>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Order date</Text>
                            <Text style={styles.dateCreateContentDes} className="font-urbanistMedium">{formatTime(orderConfirmation.createdAt)}, {formatDate(orderConfirmation.createdAt)}</Text>
                        </View>
                        <Text className="text-[16px] font-urbanistMedium pt-8">Order items</Text>
                        <View style={styles.productContent}>
                            {orderConfirmation.order_products.map((product, index) => {
                                const onSale =
                                    product.product_id.regular_price -
                                    product.product_id.sale_price >
                                    0;
                                return (
                                    <View
                                        key={index}
                                        className="flex flex-row justify-between"
                                    >
                                        <View className="flex flex-row gap-5">
                                            <View className="w-16 h-16 rounded-xl px-2 py-2 bg-white">
                                                <Image
                                                    className="w-full h-full"
                                                    source={product.product_id.thumbs}
                                                ></Image>
                                            </View>
                                            <View className="flex flex-col justify-between">
                                                <View>
                                                    <Text className="font-urbanistBold text-[14px]">
                                                        {product.product_id.name}
                                                    </Text>
                                                    <Text className="text-[12px] font-urbanistRegular">
                                                        Qty: {product.quantity}
                                                    </Text>
                                                </View>
                                                <View>
                                                    {product.variation.map((item, i) => {
                                                        const { variation_id, property_id } = item;
                                                        const currentVariation =
                                                            product.product_id.variation.find(
                                                                (i) => i._id === variation_id
                                                            );
                                                        currentVariation.properties =
                                                            currentVariation.properties.filter(
                                                                (item) => item._id === property_id
                                                            );
                                                        return (
                                                            <ProductVariation
                                                                key={i}
                                                                currentVariation={currentVariation}
                                                                variation={currentVariation}
                                                                className="text-[10px] w-6 h-6"
                                                            />
                                                        );
                                                    })}
                                                </View>
                                            </View>
                                        </View>
                                        <View className="flex flex-col">
                                            {onSale && (
                                                <Text className="font-urbanistSemiBold text-[14px] line-through text-grey2">
                                                    {formatCurrency(
                                                        product.product_id.regular_price
                                                    )}
                                                </Text>
                                            )}
                                            <Text
                                                className={`font-urbanistBold text-[13px]`}
                                            >
                                                {formatCurrency(product.product_id.sale_price)}
                                            </Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Subtotal</Text>
                            <Text style={styles.dateCreateContentDes} className="font-urbanistMedium">{formatCurrency(orderCheckout.total)}</Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Discount</Text>
                            <Text style={styles.dateCreateContentDes} className="font-urbanistMedium">{discount}</Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName} className="font-urbanistMedium">Shipping</Text>
                            <Text style={styles.dateCreateContentDes} className="font-urbanistMedium">0,00đ</Text>
                        </View>
                        {isPaidDeposit && (
                            <DepositPrice order={orderConfirmation} />
                        )}
                        <View style={styles.borderLine}></View>
                        <View style={styles.totalContent}>
                            <Text style={styles.totalContentName} className="font-urbanistBold">QUOTATION TOTAL</Text>
                            <Text style={styles.totalContentDes}>{formatCurrency(189000)}</Text>
                        </View>

                        <TouchableOpacity onPress={go_to_home} className="w-full flex my-2 pt-4">
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
