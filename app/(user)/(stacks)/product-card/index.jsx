import {  View } from "react-native";
import { Stack } from "expo-router";
import ProductCard from "../../../../components/ProductCard";
const ViewProductCard = () => {
    return (
        <View className="bg-white mt-0.5">
            <Stack.Screen options={{ headerTransparent: false }} />
            <ProductCard />
        </View>
    );
};

export default ViewProductCard;
