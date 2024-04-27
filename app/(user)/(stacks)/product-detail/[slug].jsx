import {  View } from "react-native";
import { Stack } from "expo-router";
import ProductDetail from "../../../../components/ProductDetail";
const ViewProductDetail = () => {
    return (
        <View className="bg-white">
            <ProductDetail />
        </View>
    );
};

export default ViewProductDetail;
