import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../../../components/ProductCard";
import CategoriesFilter from "../../../components/CategoriesFilter";
import { withFetchDataWithAuth } from "../../../hocs/withFetchDataWithAuth";
import { get_wishlist_api } from "../../../api/wishlistApi";
import EmptyContent from "../../../components/EmptyContent";
import { useEffect, useMemo, useState } from "react";

const Wishlist = ({ data }) => {
  const isEmpty = !data.length

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    filterProducts(selectedCategory);
  }, [data]);

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(data);
    } else {
      const newData = data.filter((item) => item.type.name === category);
      setFilteredData(newData);
    }
  };

  const getCategoryList = () => {
    const categorySet = new Set();
    data.forEach((product) => {
      categorySet.add(product.type.name);
    });
    return Array.from(categorySet);
  };


  return (
    <View className="bg-grey6 flex-1">
      {isEmpty ?
        <EmptyContent type="wishlist" />
        :
        <>
          <View className="mx-4">
            <CategoriesFilter
              categories={["All", ...getCategoryList()]}
              selectedCategory={selectedCategory}
              onSelectCategory={filterProducts}
            />
          </View>

          <View className="mx-1 pb-[75px]">
            <FlatList
              data={filteredData}
              renderItem={({ item }) => (
                <View className="w-1/2 px-1 pb-2">
                  <ProductCard product={item} />
                </View>
              )}
              keyExtractor={(item) => item._id}
              numColumns={2}
            />
          </View>
        </>
      }
    </View>
  );
};

export default withFetchDataWithAuth(Wishlist, get_wishlist_api);
