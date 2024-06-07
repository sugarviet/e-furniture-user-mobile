import { Stack } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { get_furniture_by_type_api } from "../../../../api/furnitureUrl";
import CartHeaderButton from "../../../../components/CartHeaderButton";
import EmptyContent from "../../../../components/EmptyContent";
import ProductCard from "../../../../components/ProductCard";
import { withFetchData } from "../../../../hocs/withFetchData";

function ProductCatalog({ data, params }) {
  const { slug } = params;

  const isEmpty = !data.data.length

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerTitle: () => <Text className="uppercase font-urbanistExtraBold">{slug}</Text>,
          headerRight: () => <CartHeaderButton />,
        }}
      />
      {isEmpty ?
        <EmptyContent type="type" slug={slug} />
        :
        <FlatList
          data={data.data}
          className="p-1"
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View className="w-1/2 p-1">
                <ProductCard product={item} />
              </View>
            );
          }}
          keyExtractor={(item) => item._id}
        />
      }

    </View>
  );
}

export default withFetchData(ProductCatalog, get_furniture_by_type_api);
