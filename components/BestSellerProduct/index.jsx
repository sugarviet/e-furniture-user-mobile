import { useState } from "react";
import { View, FlatList, Pressable, Text } from "react-native";
import { withFetchData } from "../../hocs/withFetchData";
import { get_best_sellers } from "../../api/bestsellerApi";
import ProductCard from "../ProductCard";


const BestSellerProduct = ({ data }) => {

    return (
        <View className="my-2">
            <FlatList
                horizontal
                data={data.data}
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View className="pl-2 w-[190px] pr-2" key={item._id}>
                        <ProductCard product={item} />
                    </View>
                )}
            />
        </View>
    );
};

export default withFetchData(BestSellerProduct, get_best_sellers);
